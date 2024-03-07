export interface Client {
  id: string
  firstName: string
  lastName: string
  counselor: string
  attendance: string
  email: string
  active: string
}

export interface DbClientRow {
  id: string
  counselor: string
  attendance: string
  first_name: string
  last_name: string
  email: string
  active: string
}
