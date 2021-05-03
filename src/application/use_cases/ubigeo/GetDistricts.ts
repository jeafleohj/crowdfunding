import { District } from 'domain/entity/ubigeo'
import { IUbigeoRepository } from 'domain/repository'

const GetDistricts = (id: number,
                      {ubigeoRepository}:{ubigeoRepository: IUbigeoRepository}) : Promise<District[]> => {
  return ubigeoRepository.getDistricts(id)
}

export {
  GetDistricts
}
