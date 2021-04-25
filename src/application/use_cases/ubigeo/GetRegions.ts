import { Region } from 'domain/entity/ubigeo/Region'
import { UbigeoRepository } from 'domain/repository/UbigeoRepository'

const GetRegions = ({ubigeoRepository}:{ubigeoRepository: UbigeoRepository}) : Promise<Region[]> => {
  return ubigeoRepository.getRegions()
}

export {
  GetRegions
}
