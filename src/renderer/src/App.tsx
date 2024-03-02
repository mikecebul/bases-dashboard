import { useQuery } from '@tanstack/react-query'
import ClientTable from './components/client-table'
import { Header } from './components/header'
import { Button } from './components/ui/button'
import { ApiClientDataResponse, ClientDataItem } from '../../main/api/types/client'

function App(): JSX.Element {
  const { data, isLoading, error, refetch } = useQuery<ApiClientDataResponse>({
    queryKey: ['clientData'],
    queryFn: () => window.api.getClientData(),
    enabled: import.meta.env.PROD
  })

  function getData() {
    refetch()
  }

  const transformedData =
    data?.data.map((client: ClientDataItem) => ({
      id: client.id,
      counselor: client.relationships.clinician.data.id,
      attendance:
        client.overviewItems[0].type === 'appointments'
          ? client.overviewItems[0].attributes.attendanceStatus
          : '-',
      firstName: client.attributes.firstName,
      lastName: client.attributes.lastName,
      active: client.attributes.inActiveTreatment,
      email: client.attributes.defaultEmailAddress
    })) || []

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>An error occurred: {error.message}</div>

  return (
    <div className="container flex flex-col max-w-full py-4 bg-background">
      <Header />
      <div className="mt-8">
        <div className="pb-8">
          <Button variant="outline" onClick={getData} className="">
            Get Client Data
          </Button>
        </div>
        <ClientTable clients={transformedData} />
      </div>
    </div>
  )
}

export default App
