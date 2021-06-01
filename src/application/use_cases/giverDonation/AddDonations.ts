import { GiverDonation } from 'domain/entity'
import { IGiverDonationRepository } from 'domain/repository/GiverDonationRepository'

export function AddDonations ( donations: Array<GiverDonation>,
                               { giverDonationRepository }: { giverDonationRepository: IGiverDonationRepository })
: Promise<any> {
  return giverDonationRepository.addMany(donations)
}
