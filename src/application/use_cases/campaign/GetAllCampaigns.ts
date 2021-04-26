import { CampaignRepository } from '../../../domain/repository/CampaignRepository';
import { Campaign } from '../../../domain/entity/Campaign';

const GetAllCampaigns = ({campaignRepository}:{campaignRepository: CampaignRepository} ) : Promise<Campaign[]> => {
  return campaignRepository.getAll()
}

export {
  GetAllCampaigns
}
