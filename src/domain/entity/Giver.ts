import { Campaign } from "./Campaign"

export enum giverStatus {
  initial = 'registrado', //cuando se registra en la web
  pending = 'pendiente',  //cuando se registra sus donaciones desde el link del correo
  complete = 'completo'   //cuando se ha realizado la recepción de donaciones
}

export class Giver {
  id: number
  name: string
  lastname: string
  email: string
  document: string
  phone: string
  campaign: number
  collection: Date
  address: string
  reference: string
  eventId: number
  status: giverStatus

  constructor({name, lastname, email, document, phone, campaign}: Giver) {
    this.name = name
    this.lastname = lastname
    this.email = email
    this.document = document
    this.phone = phone
    this.campaign = campaign
    this.status = giverStatus.initial
  }
}
