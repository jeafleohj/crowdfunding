import { BeneficiaryDonation } from 'domain/entity'

export interface IBeneficiaryDonationRepository {
  deliverMany(donation: Array<BeneficiaryDonation>): Promise<BeneficiaryDonation>
  getByBeneficiary(id: number): Promise<any>
  getByCampaign(id: number): Promise<any>
  getCurrentDistribution(campaignId: number): Promise<any>
  getDistribution(campaignId: number, beneficiaryId: number): Promise<any>
  getDistributionByBeneficiary(benefiaryId: number, campaignId: number): Promise<any>
  merge(data: Partial<BeneficiaryDonation>): void
  persist(distributions: Array<BeneficiaryDonation>): Promise<any>
  persistMany(data: Array<Partial<BeneficiaryDonation>>): Promise<boolean>
  remove(id: number): Promise<boolean>
  updateAmount(beneficiaryId: number,donationId: number, amount: number): Promise<any>
}
