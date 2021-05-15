import { GiverDonation } from 'domain/entity'

export interface IGiverDonationRepository {
  persist(campaignId: number, amount: number): Promise<GiverDonation>
  merge(domainUser: any): void
  remove(userId: number): void
  find(): void
}
