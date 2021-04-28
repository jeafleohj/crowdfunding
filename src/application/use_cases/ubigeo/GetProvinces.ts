import { Province } from 'domain/entity/ubigeo/Province'
import { IUbigeoRepository } from 'domain/repository/UbigeoRepository'

const GetProvinces = (id:number,
                      {ubigeoRepository}:{ubigeoRepository: IUbigeoRepository}) : Promise<Province[]> => {
  return ubigeoRepository.getProvinces(id)
}

export {
  GetProvinces
}
