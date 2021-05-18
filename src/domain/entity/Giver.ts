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
  eventId: number
  status: giverStatus

  constructor(giver: Partial<Giver>) {
    const {
      campaign = 0,
      document = '',
      email = '',
      lastname = '',
      name = '',
      phone = '',
    } = giver

    this.name = name
    this.lastname = lastname
    this.email = email
    this.document = document
    this.phone = phone
    this.campaign = campaign
    this.status = giverStatus.initial

  }
}
