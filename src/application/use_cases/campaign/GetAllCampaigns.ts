import { ICampaignRepository } from 'domain/repository/CampaignRepository';
import { Campaign } from 'domain/entity/Campaign';

const GetAllCampaigns = ({campaignRepository}:{campaignRepository: ICampaignRepository} ) : Promise<Campaign[]> => {
  return campaignRepository.getAll()
}

export {
  GetAllCampaigns
}
