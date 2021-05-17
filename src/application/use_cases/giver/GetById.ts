import { Giver } from 'domain/entity/Giver';
import { IGiverRepository } from 'domain/repository'

const GetById = (giverId: number, campaignId:number,
  { giverRepository }: {giverRepository : IGiverRepository }): Promise<any> => {
  return giverRepository.getById(giverId,campaignId)
}

export {
  GetById
}
