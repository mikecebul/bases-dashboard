import { db } from '../index'
import { Client } from '.'

export function insertClient(client: Client) {
  const stmt = db.prepare(
    'Insert INTO client (id, counselor, attendance, first_name, last_name, email, active) VALUES (?, ?, ?, ?, ?, ?, ?)'
  )
  const info = stmt.run(
    client.id,
    client.counselor,
    client.attendance,
    client.firstName,
    client.lastName,
    client.email,
    client.active
  )
  return info
}
