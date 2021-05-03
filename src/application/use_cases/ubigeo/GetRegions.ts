import { Region } from 'domain/entity/ubigeo'
import { IUbigeoRepository } from 'domain/repository'

const GetRegions = ({ubigeoRepository}:{ubigeoRepository: IUbigeoRepository}) : Promise<Region[]> => {
  return ubigeoRepository.getRegions()
}

export {
  GetRegions
}
