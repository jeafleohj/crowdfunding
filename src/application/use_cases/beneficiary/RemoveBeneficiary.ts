import { Beneficiary } from 'domain/entity'
import { ICampaignRepository } from 'domain/repository'

const RemoveBeneficiary = (data: Beneficiary,
  { campaignRepository }: {campaignRepository : ICampaignRepository }): Promise<any> => {
  return campaignRepository.removeBeneficiary(data)
}

export {
  RemoveBeneficiary
}
