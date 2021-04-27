import { Beneficiary } from 'domain/entity/Beneficiary'
import { CampaignRepository } from 'domain/repository/CampaignRepository'


const CreateBeneficiary = (data: Beneficiary,
  { campaignRepository }: {campaignRepository : CampaignRepository }): Promise<any> => {
  const user = new Beneficiary(data)
  return campaignRepository.addBeneficiary(user)
}

export {
  CreateBeneficiary
}
