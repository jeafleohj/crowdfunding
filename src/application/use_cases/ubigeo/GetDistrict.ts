import { District } from 'domain/entity/ubigeo'
import { IUbigeoRepository } from 'domain/repository'

const GetDistrict = (id: string,
                      {ubigeoRepository}:{ubigeoRepository: IUbigeoRepository}) : Promise<District> => {
  return ubigeoRepository.getDistrict(id)
}

export {
  GetDistrict
}
