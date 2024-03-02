export interface ApiOverviewItemsResponse {
  data: OverviewItems[]
}

export interface OverviewItems {
  id: string
  type: string
  links: Links
  attributes: Attributes
  relationships: Relationships
  meta: Meta
}

export interface Links {
  self: string
}

export interface Attributes {
  cursorId: string
  startTime: string
  endTime: string
  attendanceStatus: string
  cptCodes: CptCode[]
  permissions: string
  rankNum: number
}

export interface CptCode {
  code: string
  rate_per_unit: string
  rate: any
  description: string
  number_of_units: number
  unit_billing_enabled: boolean
  hashed_id: string
  modifier_one: any
  modifier_two: any
  modifier_three: any
  modifier_four: any
}

export interface Relationships {
  clinician: Clinician
  overviewDocuments: OverviewDocuments
  progressNote: ProgressNote
  psychotherapyNote: PsychotherapyNote
}

export interface Clinician {
  data: Data
}

export interface Data {
  type: string
  id: string
}

export interface OverviewDocuments {
  data: any[]
}

export interface ProgressNote {
  data: Data2
}

export interface Data2 {
  type: string
  id: string
}

export interface PsychotherapyNote {
  data: any
}

export interface Meta {
  documentsCount: number
}
