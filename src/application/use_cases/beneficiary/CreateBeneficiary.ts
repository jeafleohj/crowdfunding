import { Beneficiary } from 'domain/entity/Beneficiary'
import { ICampaignRepository } from 'domain/repository/CampaignRepository'


const CreateBeneficiary = (data: Beneficiary,
  { campaignRepository }: {campaignRepository : ICampaignRepository }): Promise<any> => {
  const user = new Beneficiary(data)
  return campaignRepository.addBeneficiary(user)
}

export {
  CreateBeneficiary
}
