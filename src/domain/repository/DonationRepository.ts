import { Donation } from 'domain/entity'

export interface IDonationRepository {
   persist(donation: Donation): Promise<any>
   merge(donation: Donation): void
   getAll(): Promise<Donation[]>
   updateDonation(donation: Donation): Promise<any>
   removeDonation(donation: Donation): Promise<any>
}
