import { Beneficiary } from 'domain/entity/Beneficiary'
import { ICampaignRepository } from 'domain/repository/CampaignRepository'

const ListBeneficiaries = async (id: number,
  { campaignRepository }: { campaignRepository: ICampaignRepository })  => {
  let campaing = await campaignRepository.listBeneficiaries(id)
  return campaing.beneficiaries
}

export {
  ListBeneficiaries
}
