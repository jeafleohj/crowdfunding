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

  constructor({id, name, lastname, email, document, phone, campaign_id, collection, address, reference, event_id, status}: Giver) {
    this.id = id
    this.name = name
    this.lastname = lastname
    this.email = email
    this.document = document
    this.phone = phone
    this.campaign_id = campaign_id
    this.collection = collection
    this.address = address
    this.reference = reference
    this.event_id = event_id
    this.status = status
  }
}
