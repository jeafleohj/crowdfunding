import { Beneficiary } from 'domain/entity'
import { ICampaignRepository } from 'domain/repository'

const CreateBeneficiary = (data: Beneficiary,
  { campaignRepository }: {campaignRepository : ICampaignRepository }): Promise<any> => {
  const user = new Beneficiary(data)
  return campaignRepository.addBeneficiary(user)
}

export {
  CreateBeneficiary
}
