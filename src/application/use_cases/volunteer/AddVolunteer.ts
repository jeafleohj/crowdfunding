import { IVolunteerRepository } from 'domain/repository'

const AddVolunteer = (campaignId: number,
                      userId: number,
                      { volunteerRepository } : {volunteerRepository: IVolunteerRepository}) : Promise<any> => {
  return volunteerRepository.add(campaignId, userId)
}

export {
  AddVolunteer
}
