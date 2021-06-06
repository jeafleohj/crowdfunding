import { Beneficiary } from 'domain/entity'

export interface IBeneficiaryRepository {
   persist(beneficiary: Beneficiary): Promise<any>
   merge(beneficiary: Beneficiary): void
   remove(beneficiary: Beneficiary): Promise<any>
   getAll(): Promise<Beneficiary[]>
   getTotalByCampaign(campaignId: number): Promise<number>
   getByDocument(document: string): Promise<Beneficiary>
   updateBeneficiary(beneficiary: Beneficiary): Promise<any>
}
