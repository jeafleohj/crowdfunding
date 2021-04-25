export type giverData = {
  id: number
  name: string
  lastname: string
  email: string
  document: string
  phone: string
  campaign_id: number
  collection: Date
  address: string
  reference: string
  event_id: number
  status: string
}

export class Giver {
  id: number
  name: string
  lastname: string
  email: string
  document: string
  phone: string
  campaign_id: number
  collection: Date
  address: string
  reference: string
  event_id: number
  status: string

  constructor({}: giverData) {

  }
}
