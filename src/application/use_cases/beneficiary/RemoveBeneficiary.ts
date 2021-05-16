import { Beneficiary } from 'domain/entity'
import { ICampaignRepository } from 'domain/repository'

const RemoveBeneficiary = (beneficiaryId: number, campaignId: number,
  { campaignRepository }: {campaignRepository : ICampaignRepository }): Promise<any> => {
  return campaignRepository.removeBeneficiary(beneficiaryId, campaignId)
}

export {
  RemoveBeneficiary
}
