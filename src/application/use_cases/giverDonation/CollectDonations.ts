import { GiverDonation } from 'domain/entity'
import { IGiverDonationRepository } from 'domain/repository/GiverDonationRepository'

export function CollectDonations ( donations: Array<GiverDonation>,
                               { giverDonationRepository }: { giverDonationRepository: IGiverDonationRepository })
: Promise<any> {
  return giverDonationRepository.collectMany(donations)
}
