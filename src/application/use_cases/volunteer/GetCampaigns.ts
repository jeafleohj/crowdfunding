import { Campaign } from 'domain/entity'
import { IVolunteerRepository } from 'domain/repository'

const GetCampaigns = (idUser: number, { volunteerRepository }: { volunteerRepository: IVolunteerRepository }): Promise<Campaign[]> => {
  console.log(idUser)
  return volunteerRepository.getCampaigns(idUser)
}

export {
  GetCampaigns
}
