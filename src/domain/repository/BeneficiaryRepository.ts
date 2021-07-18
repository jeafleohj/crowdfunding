import { Beneficiary } from 'domain/entity'

export interface IBeneficiaryRepository {
  getAll(): Promise<Beneficiary[]>
  getByDocument(document: string): Promise<Beneficiary>
  getTotalByCampaign(campaignId: number): Promise<number>
  merge(beneficiary: Beneficiary): void
  persist(beneficiary: Beneficiary): Promise<any>
  remove(beneficiary: Beneficiary): Promise<any>
  updateBeneficiary(beneficiary: Beneficiary): Promise<any>
}
