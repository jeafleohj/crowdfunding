import { IDonationRepository } from './../../../domain/repository/DonationRepository';
import { ICampaignRepository, ICampaingEventRepository } from 'domain/repository'

const GetDetails = async (id: number,
  { campaignRepository, donationRepository, campaignEventRepository }:
  { campaignRepository: ICampaignRepository, donationRepository: IDonationRepository, campaignEventRepository: ICampaingEventRepository })  => {
  //devuelve la campaña con los beneficiarios
  let campaign = await campaignRepository.getById(id) as any
  let beneficiaries = await campaignRepository.listBeneficiaries(id)
  let donations = await donationRepository.getByCampaign(id)
  let events = await campaignEventRepository.getByCampaign(id)

  campaign.beneficiaries = beneficiaries.length
  campaign.donations = donations
  campaign.events = events

  return campaign
}

export {
  GetDetails
}
