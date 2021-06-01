import { GiverDonation } from 'domain/entity'

export interface IGiverDonationRepository {
  persist(giverDonation: GiverDonation): Promise<GiverDonation>
  addMany(donation: Array<GiverDonation>): Promise<GiverDonation>
  merge(domainUser: any): void
  remove(userId: number): void
  find(): void
}
