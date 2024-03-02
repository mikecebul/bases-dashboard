import puppeteer, { Page } from 'puppeteer'
import type { ApiClientDataResponse } from './api/types/client'
import { ApiOverviewItemsResponse } from './api/types/overview-items'
import { insertClient } from './db/client/insert-client'
import type { Client } from './db/client'

export default async function getClientData(): Promise<ApiClientDataResponse> {
  const isWin = process.platform === 'win32'
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: isWin ? '' : '/usr/bin/google-chrome'
  })
  const page = await browser.newPage()

  await page.goto('https://account.simplepractice.com/')

  await page.type('#user_email', String(import.meta.env.MAIN_VITE_EMAIL))
  await page.type('#user_password', String(import.meta.env.MAIN_VITE_PASSWORD))

  await Promise.all([page.waitForNavigation({ timeout: 10000 }), page.click('#submitBtn')])

  await page.waitForFunction(
    'window.location.href === "https://secure.simplepractice.com/calendar/appointments"',
    { timeout: 30000 }
  )

  await page.goto(
    'https://secure.simplepractice.com/frontend/base-clients?filter[inActiveTreatment]=true&filter[clinicianId]=1053979&filter[thisType]=client&sort=lastName',
    { waitUntil: 'networkidle0' }
  )

  const clientData: ApiClientDataResponse = await page.evaluate(() => {
    const bodyText = document.querySelector('body')?.innerText
    return bodyText ? JSON.parse(bodyText) : undefined
  })

  // getOverviewItems(clientData, page)
  if (clientData && Array.isArray(clientData.data)) {
    for (const client of clientData.data) {
      try {
        console.log('Client Id', client.id)
        // Construct the URL to fetch overview-items for the client
        const overviewItemsUrl = `https://secure.simplepractice.com/frontend/overview-items`

        const params = {
          'fields[appointments]':
            'cursorId,startTime,endTime,attendanceStatus,cptCodes,clinician,overviewDocuments',
          'fields[clients]': 'id',
          'filter[clientId]': client.id,
          'filter[thisType]': 'appointment',
          'page[size]': '12'
        }

        const urlParams = new URLSearchParams(params).toString()
        const fullURL = `${overviewItemsUrl}?${urlParams}`

        // Navigate to the overview-items page for the client
        await safeGoto(page, fullURL, { waitUntil: 'networkidle0' })

        // Extract overview-items data for the client
        const { data: appointments }: ApiOverviewItemsResponse = await page.evaluate(() => {
          const bodyText = document.querySelector('body')?.innerText
          return bodyText ? JSON.parse(bodyText) : undefined
        })
        client.overviewItems = appointments

        const newClient: Client = {
          id: client.id,
          counselor: client.relationships.clinician.data.id,
          attendance: appointments[0].attributes.attendanceStatus,
          firstName: client.attributes.firstName,
          lastName: client.attributes.lastName,
          email: client.attributes.defaultEmailAddress,
          active: client.attributes.inActiveTreatment
        }

        const info = insertClient(newClient)
        console.log('Info:', info)
      } catch (error) {
        console.error('Error navigating to overview items:', error)
        // Handle the error or attempt recovery}
      }
    }
  }

  await browser.close()
  return clientData
}

async function safeGoto(page: Page, url: string, options = {}, retryCount = 3) {
  try {
    await page.goto(url, options)
  } catch (error) {
    if (retryCount === 0) throw error // Throw error after retrying
    console.log(`Navigation to ${url} failed, retrying...`)
    await delay(1000) // Wait for 1 second before retrying
    await safeGoto(page, url, options, retryCount - 1) // Retry navigation
  }
}

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  })
}
