import { Beneficiary } from 'domain/entity'
import { ICampaignRepository } from 'domain/repository'

const ListBeneficiaries = async (id: number,
  { campaignRepository }: { campaignRepository: ICampaignRepository })  => {
  let campaing = await campaignRepository.listBeneficiaries(id)
  return campaing.beneficiaries
}

export {
  ListBeneficiaries
}
