import { Beneficiary } from './Beneficiary'
import { Campaign } from './Campaign'

// Mover status de beneficiario
// Transición no lo hare, mas facil es mover el backup
export enum  StatusBeneficiaryCampaign {
  associated = 'asociado', //
  selected = 'pendiente', //
  attended = 'atendido', //
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
