import { useQuery } from '@tanstack/react-query'
import ClientTable from './components/client-table'
import { Header } from './components/header'
import { Button } from './components/ui/button'
import { Client } from '@db/client'
import { Suspense, useEffect, useState } from 'react'

function App(): JSX.Element {
  const [clientData, setClientData] = useState<Client[]>([])
  const { refetch: SPRefetch } = useQuery<Client[]>({
    queryKey: ['SPclientData'],
    queryFn: () => window.api.getSPClientData(),
    enabled: false
  })
  const { data: DBData, refetch: DBRefetch } = useQuery<Client[]>({
    queryKey: ['DBclientData'],
    queryFn: () => window.api.getDBClientData(),
    enabled: true
  })

  useEffect(() => {
    if (DBData) {
      setClientData(DBData)
    }
  }),
    [DBData]

  async function getSPData() {
    try {
      const result = await SPRefetch()
      if (result.error) console.log('Error fetching SP data:', result.error)
      if (result.data) setClientData(result.data)
    } catch (error) {
      console.log('Unexpected error fetching SP data:', error)
    }
  }

  function getDBData() {
    DBRefetch()
    if (DBData) setClientData(DBData)
  }

  const transformedData =
    clientData?.map((client: Client) => ({
      id: client.id,
      counselor: client.counselor,
      attendance: client.attendance,
      firstName: client.firstName,
      lastName: client.lastName,
      active: client.active,
      email: client.email
    })) || []

  return (
    <div className="container flex flex-col max-w-full py-4 bg-background">
      <Header />
      <div className="mt-8">
        <div className="pb-8">
          <Button variant="outline" onClick={getSPData} className="">
            Get Data From SP
          </Button>
          <Button variant="outline" onClick={getDBData} className="">
            Get Data From DB
          </Button>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <ClientTable clients={transformedData} />
        </Suspense>
      </div>
    </div>
  )
}

export default App
