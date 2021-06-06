import { BeneficiaryDonation } from 'domain/entity'

export interface IBeneficiaryDonationRepository {
  persist(beneficiaryId: number, campaignId: number): Promise<boolean>
  persist(data: Array<Partial<BeneficiaryDonation>>): Promise<boolean>
  merge(data: Partial<BeneficiaryDonation>): void
  remove(id: number): Promise<boolean>
  getByCampaign(id: number): Promise<any>
  getByBeneficiary(id: number): Promise<any>
}
