import { ElectronAPI } from '@electron-toolkit/preload'
import { Cookie } from 'puppeteer'
import type { Client } from '@db/client'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      getSPClientData: () => Promise<Client[]>
      getDBClientData: () => Promise<Client[]>
    }
  }
}
