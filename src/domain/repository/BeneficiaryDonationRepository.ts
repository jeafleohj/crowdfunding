import { BeneficiaryDonation } from 'domain/entity'

export interface IBeneficiaryDonationRepository {
  persist(distributions: Array<BeneficiaryDonation>): Promise<any>
  persistMany(data: Array<Partial<BeneficiaryDonation>>): Promise<boolean>
  merge(data: Partial<BeneficiaryDonation>): void
  remove(id: number): Promise<boolean>
  getByCampaign(id: number): Promise<any>
  getByBeneficiary(id: number): Promise<any>
  getDistribution(campaignId: number, beneficiaryId: number): Promise<any>
  deliverMany(donation: Array<BeneficiaryDonation>): Promise<BeneficiaryDonation>
}
