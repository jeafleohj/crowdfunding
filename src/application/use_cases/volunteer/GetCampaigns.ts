import { Campaign } from 'domain/entity'
import { IVolunteerRepository } from 'domain/repository'

const GetCampaigns = (idUser: number, { volunteerRepository }: { volunteerRepository: IVolunteerRepository }): Promise<any> => {
  return volunteerRepository.getCampaigns(idUser)
}

export {
  GetCampaigns
}
