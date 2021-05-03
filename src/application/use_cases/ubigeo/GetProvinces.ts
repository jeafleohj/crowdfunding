import { Province } from 'domain/entity/ubigeo'
import { IUbigeoRepository } from 'domain/repository'

const GetProvinces = (id:number,
                      {ubigeoRepository}:{ubigeoRepository: IUbigeoRepository}) : Promise<Province[]> => {
  return ubigeoRepository.getProvinces(id)
}

export {
  GetProvinces
}
