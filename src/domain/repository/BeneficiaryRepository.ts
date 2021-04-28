import { Beneficiary } from 'domain/entity/Beneficiary'

export interface IBeneficiaryRepository {
   persist(beneficiary: Beneficiary): Promise<any>
   merge(beneficiary: Beneficiary): void
   remove(id: number): void
   getAll(): Promise<Beneficiary[]>
}
