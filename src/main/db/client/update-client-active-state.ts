import { db } from '../index'

// Function to update only the active state of a client
export function updateClientActiveState(id: string) {
  const stmt = db.prepare(`
    UPDATE client
    SET active = 'false'
    WHERE id = ?;
  `)
  const info = stmt.run(id)
  return info
}
