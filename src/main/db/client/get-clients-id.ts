import { DbClientID } from '.'
import { db } from '../index'

export function getClientsID(): string[] {
  const stmt = db.prepare('SELECT id FROM client')
  const rows = stmt.all() as DbClientID[]
  const clientIDs = rows.map(row => row.id)
  return clientIDs
}
