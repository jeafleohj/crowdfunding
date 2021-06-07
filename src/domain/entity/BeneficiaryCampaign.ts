export enum  StatusBeneficiaryCampaign {
  associated = 'asociado',
  selected = 'pendiente',
  rejected = 'sin asignar',
  attended = 'atendido',
}

export class BeneficiaryCampaign {
  id: number
  beneficiaryId: number
  campaignId: number
  status: StatusBeneficiaryCampaign
  priority: number
  constructor({beneficiaryId, campaignId}: BeneficiaryCampaign) {
    this.status = StatusBeneficiaryCampaign.associated
    this.beneficiaryId = beneficiaryId
    this.campaignId = campaignId
  }
}
