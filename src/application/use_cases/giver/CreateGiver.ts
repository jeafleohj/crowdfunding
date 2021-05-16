import { Giver } from 'domain/entity/Giver';
import { ICampaignRepository } from 'domain/repository'

const CreateGiver = (data: Giver,
  { campaignRepository }: {campaignRepository : ICampaignRepository }): Promise<any> => {
  const giver = new Giver(data)
  return campaignRepository.addGiver(giver)
}

export {
  CreateGiver
}
