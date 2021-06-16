import { GiverDonation } from 'domain/entity';

export enum giverStatus {
  initial = 'registrado', //cuando se registra en la web
  pending = 'pendiente',  //cuando se registra sus donaciones desde el link del correo
  // incomplete = 'incompleto', //cuando se ha realizado la recepción de donaciones pero no las ha completado
  complete = 'completo'   //cuando se ha realizado la recepción de donaciones y las ha completado
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
  giverDonations: GiverDonation[]

  constructor(giver: Partial<Giver>) {
    const {
      campaign = 0,
      document = '',
      email = '',
      lastname = '',
      name = '',
      phone = '',
      status = giverStatus.initial,
      eventId = 0,
    } = giver

    this.name = name
    this.lastname = lastname
    this.email = email
    this.document = document
    this.phone = phone
    this.campaign = campaign
    this.status = status
    this.eventId = eventId

  }
}
