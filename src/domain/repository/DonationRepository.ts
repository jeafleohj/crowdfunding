import { Donation } from 'domain/entity'

export interface IDonationRepository {
   persist(donation: Donation): Promise<any>
   merge(donation: Donation): void
   remove(id: number): void
   getAll(): Promise<Donation[]>
}
