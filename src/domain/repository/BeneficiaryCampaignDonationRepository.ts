import { BeneficiaryCampaignDonation } from 'domain/entity/BeneficiaryCampaignDonation'

export interface IBeneficiaryCampaignDonationRepository {
  persist(beneficiaryId: number, campaignId: number): Promise<boolean>
  persist(data: Array<Partial<BeneficiaryCampaignDonation>>): Promise<boolean>
  merge(data: Partial<BeneficiaryCampaignDonation>): void
  remove(id: number): Promise<boolean>
  getByCampaign(id: number): Promise<any>
  getByBeneficiary(id: number): Promise<any>
}
