import { Beneficiary } from 'domain/entity'

export interface IBeneficiaryRepository {
   persist(beneficiary: Beneficiary): Promise<any>
   merge(beneficiary: Beneficiary): void
   remove(id: number): Promise<any>
   getAll(): Promise<Beneficiary[]>
   getByDocument(document: number): Promise<Beneficiary>
   updateBeneficiary(beneficiary: Beneficiary): Promise<any>
}
