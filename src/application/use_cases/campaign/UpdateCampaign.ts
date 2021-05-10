import { ICampaignRepository } from 'domain/repository'
import { Campaign } from 'domain/entity'

export async function UpdateCampaign(data: Partial<Campaign>,
                               { campaignRepository }: { campaignRepository: ICampaignRepository }) {
  return campaignRepository.merge(data)
}
