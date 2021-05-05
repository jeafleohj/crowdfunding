import { IVolunteerRepository } from 'domain/repository'

const GetByCampaign = (campaignId: number,
                       { volunteerRepository } : {volunteerRepository: IVolunteerRepository}) : Promise<any> => {
  return volunteerRepository.getByCampaign(campaignId)
}

export {
  GetByCampaign
}
