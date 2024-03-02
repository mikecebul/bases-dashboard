import { OverviewItems } from "./overview-items";

export interface ApiClientDataResponse {
  data: ClientDataItem[]
  included: IncludedEntity[]
  meta: ApiResponseMeta
  links: ApiResponseLinks
}

export interface ClientDataItem {
  overviewItems: OverviewItems[]
  id: string
  type: string
  links: EntityLinks
  attributes: ClientAttributes
  relationships: ClientRelationships
}

export interface EntityLinks {
  self: string
}

export interface ClientAttributes {
  billingType: string
  insuranceBillingSubtype: any
  inActiveTreatment: string
  secondaryClinicianIds: string
  permissions: string
  hashedId: string
  name: string
  firstName: string
  lastName: string
  middleName: string
  initials: string
  suffix: any
  nickname: any
  preferredName: string
  legalName: string
  defaultPhoneNumber: string
  defaultEmailAddress: string
  generalNotes: any
  sex: string
  genderInfo: string
  ignoredForMerge: string
  enableEmailReminders: string
  enableOutstandingDocumentReminders: string
  enableSmsvoiceReminders: string
  enableSmsOutstandingDocumentReminders: string
  isMinor: string
  isAutopayEnabled: string
}

export interface ClientRelationships {
  clinician: RelationshipClinician
  waitlistEntry: RelationshipWaitlistEntry
  clientRelationships: RelationshipClient[]
  reciprocalClientRelationships: RelationshipClient[]
  phones: RelationshipPhone[]
  emails: RelationshipEmail[]
  insuranceInfos: RelationshipInsuranceInfo[]
  office: RelationshipOffice
  stripeCards: RelationshipStripeCards
}

export interface RelationshipClinician {
  data: RelationshipData
}

export interface RelationshipData {
  type: string
  id: string
}

export interface RelationshipWaitlistEntry {
  data: any
}

export interface RelationshipClient {
  type: string
  id: string
}

export interface RelationshipPhone {
  type: string
  id: string
}

export interface RelationshipEmail {
  type: string
  id: string
}

export interface RelationshipInsuranceInfo {
  data: any[]
}

export interface RelationshipOffice {
  data: RelationshipData // Reuse RelationshipData as it fits the structure
}

export interface RelationshipStripeCards {
  links: EntityLinks // Reuse EntityLinks as it fits the structure
}

export interface IncludedEntity {
  id: string
  type: string
  links?: EntityLinks // Optional, as before
  attributes: IncludedAttributes
  relationships?: IncludedEntityRelationships // Optional, as before
}

export interface IncludedAttributes {
  // Attributes specific to included entities
  // Include all properties from the previous Attributes2 interface
}

export interface IncludedEntityRelationships {
  // Relationships specific to included entities
  // Include all properties from the previous Relationships2 interface
}

export interface ApiResponseMeta {
  count: number
}

export interface ApiResponseLinks {
  first: string
  last: string
}
