import { Donation } from 'domain/entity'

export interface IDonationRepository {
   persist(donation: Donation): Promise<any>
   merge(donation: Donation): void
   getByCampaign(campaignId: number): Promise<Donation[]>
   updateDonation(donation: Donation): Promise<any>
   removeDonation(donation: Donation): Promise<any>
}
