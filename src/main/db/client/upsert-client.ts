import { db } from '../index'
import { Client } from '.'

export function upsertClient(client: Client) {
  const { id, counselor, attendance, firstName, lastName, email, active } = client
  const stmt = db.prepare(`
      INSERT INTO client (id, counselor, attendance, first_name, last_name, email, active)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET
        counselor = excluded.counselor,
        attendance = excluded.attendance,
        first_name = excluded.first_name,
        last_name = excluded.last_name,
        email = excluded.email,
        active = excluded.active;
    `)
  const info = stmt.run(id, counselor, attendance, firstName, lastName, email, active)
  return info
}
