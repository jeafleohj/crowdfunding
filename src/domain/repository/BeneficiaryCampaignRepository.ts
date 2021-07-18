import { BeneficiaryCampaign } from 'domain/entity'
import { StatusBeneficiaryCampaign } from 'domain/entity/BeneficiaryCampaign'

export interface  IBeneficiaryCampaignRepository {
  persist(beneficiaryId: number, campaignId: number): Promise<boolean>
  merge(payload: Partial<BeneficiaryCampaign>): Promise<any>
  remove(beneficiaryId: number, campaignId: number): Promise<boolean>
  updateStatus(beneficiaryId: number, campaignId: number, status :StatusBeneficiaryCampaign): Promise<any>
}
