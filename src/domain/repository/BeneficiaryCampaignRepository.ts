import { BeneficiaryCampaign } from 'domain/entity'
export interface  IBeneficiaryCampaignRepository {
  persist(beneficiaryId: number, campaignId: number): Promise<boolean>
  merge(payload: Partial<BeneficiaryCampaign>): void
  remove(id: number): Promise<boolean>
}