import { CampaignRepository } from 'domain/repository/CampaignRepository';
import { Campaign } from 'domain/entity/Campaign';

const GetAllCampaigns = (idUser: number, { campaignRepository }: { campaignRepository: CampaignRepository }): Promise<Campaign[]> => {
  return campaignRepository.getByUser(idUser)
}

export {
  GetAllCampaigns
}
