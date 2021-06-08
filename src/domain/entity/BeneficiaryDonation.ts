export enum  StatusBeneficiaryDonation {
  initial = 'registrado', //cuando se registra
  delivered = 'entregado'   //cuando se ha entregado a los beneficiarios
}

export class BeneficiaryDonation {
  id: number
  beneficiaryId: number
  campaignId: number
  donationId: number
  amount: number
  status: StatusBeneficiaryDonation

  constructor(bcd : Partial<BeneficiaryDonation>) {
    this.id = bcd.id || 0
    this.beneficiaryId = bcd.beneficiaryId || 0
    this.campaignId = bcd.campaignId || 0
    this.donationId = bcd.donationId || 0
    this.amount = bcd.amount || -1
    this.status = StatusBeneficiaryDonation.initial
  }
}
