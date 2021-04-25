import { District } from 'domain/entity/ubigeo/District'
import { UbigeoRepository } from 'domain/repository/UbigeoRepository'

const GetDistricts = (id: number,
                      {ubigeoRepository}:{ubigeoRepository: UbigeoRepository}) : Promise<District[]> => {
  return ubigeoRepository.getDistricts(id)
}

export {
  GetDistricts
}
