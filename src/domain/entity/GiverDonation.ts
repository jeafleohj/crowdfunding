export enum giverDonationStatus {
  initial = 'registrado', //cuando se registra
  collected = 'recolectado',  //cuando se ha recibido del donante
}

export class GiverDonation {
  id: number
  donation: number
  giver: number
  amount: number
  status: giverDonationStatus
  constructor({ giver, donation, amount } : GiverDonation ) {
    this.giver = giver
    this.donation = donation
    this.amount = amount
    this.status = giverDonationStatus.initial
  }
}
