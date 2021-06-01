import { District } from 'domain/entity/ubigeo'
import { IUbigeoRepository } from 'domain/repository'

const GetDistrict = (id: number,
                      {ubigeoRepository}:{ubigeoRepository: IUbigeoRepository}) : Promise<District> => {
  return ubigeoRepository.getDistrict(id)
}

export {
  GetDistrict
}
