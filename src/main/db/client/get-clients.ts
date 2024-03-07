import { Client, DbClientRow } from '.'
import { db } from '../index'

export function getClients() {
  const stmt = db.prepare('SELECT * FROM client')
  const rows = stmt.all() as DbClientRow[]
  const clients = rows.map((row) => ({
    id: row.id,
    counselor: row.counselor,
    attendance: row.attendance,
    firstName: row.first_name,
    lastName: row.last_name,
    email: row.email,
    active: row.active
  }))

  return clients as Client[]
}
