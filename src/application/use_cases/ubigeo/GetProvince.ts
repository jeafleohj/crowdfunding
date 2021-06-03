import { Province } from 'domain/entity/ubigeo'
import { IUbigeoRepository } from 'domain/repository'

const GetProvince = (id: string,
                      {ubigeoRepository}:{ubigeoRepository: IUbigeoRepository}) : Promise<Province> => {
  return ubigeoRepository.getProvince(id)
}

export {
  GetProvince
}
