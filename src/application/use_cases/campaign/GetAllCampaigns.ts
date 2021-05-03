import { ICampaignRepository } from 'domain/repository'
import { Campaign } from 'domain/entity'

const GetAllCampaigns = (idUser: number, { campaignRepository }: { campaignRepository: ICampaignRepository }): Promise<Campaign[]> => {
  return campaignRepository.getByUser(idUser)
}

export {
  GetAllCampaigns
}
