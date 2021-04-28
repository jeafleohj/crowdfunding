import { Beneficiary } from 'domain/entity/Beneficiary'
import { CampaignRepository } from 'domain/repository/CampaignRepository'

const ListBeneficiaries = async (id: number,
  { campaignRepository }: { campaignRepository: CampaignRepository })  => {
  let campaing = await campaignRepository.listBeneficiaries(id)
  return campaing.beneficiaries
}

export {
  ListBeneficiaries
}
