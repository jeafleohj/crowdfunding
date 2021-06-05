import { GiverDonation } from 'domain/entity'

export interface IGiverDonationRepository {
  persist(giverDonation: GiverDonation): Promise<GiverDonation>
  addMany(donation: Array<GiverDonation>): Promise<GiverDonation>
  collectMany(donation: Array<GiverDonation>): Promise<GiverDonation>
  remove(userId: number): void
  find(): void
}
