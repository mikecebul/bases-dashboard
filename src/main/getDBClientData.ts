import { Client } from './db/client'
import { getClients } from './db/client/get-clients'

export default function getDBClientData(): Client[] | undefined {
  const clients = getClients()
  console.log('DB CLients:', clients)

  return clients
}
