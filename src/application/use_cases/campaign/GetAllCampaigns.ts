import { ICampaignRepository } from 'domain/repository/CampaignRepository';
import { Campaign } from 'domain/entity/Campaign';

const GetAllCampaigns = (idUser: number, { campaignRepository }: { campaignRepository: ICampaignRepository }): Promise<Campaign[]> => {
  return campaignRepository.getByUser(idUser)
}

export {
  GetAllCampaigns
}
