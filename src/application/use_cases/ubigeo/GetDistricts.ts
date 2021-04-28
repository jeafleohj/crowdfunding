import { District } from 'domain/entity/ubigeo/District'
import { IUbigeoRepository } from 'domain/repository/UbigeoRepository'

const GetDistricts = (id: number,
                      {ubigeoRepository}:{ubigeoRepository: IUbigeoRepository}) : Promise<District[]> => {
  return ubigeoRepository.getDistricts(id)
}

export {
  GetDistricts
}
