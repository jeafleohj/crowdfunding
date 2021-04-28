import { Region } from 'domain/entity/ubigeo/Region'
import { IUbigeoRepository } from 'domain/repository/UbigeoRepository'

const GetRegions = ({ubigeoRepository}:{ubigeoRepository: IUbigeoRepository}) : Promise<Region[]> => {
  return ubigeoRepository.getRegions()
}

export {
  GetRegions
}
