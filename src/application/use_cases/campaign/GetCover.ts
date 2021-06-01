import { ICampaignRepository } from 'domain/repository'

const GetCover = async (id: number,
  { campaignRepository }: { campaignRepository: ICampaignRepository })  => {
  let campaing = await campaignRepository.getById(id)
  let data = {
    image_url: campaing.image_url,
    description: campaing.description
  }
  return data
}

export {
  GetCover
}
