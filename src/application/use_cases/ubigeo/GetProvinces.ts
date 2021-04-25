import { Province } from 'domain/entity/ubigeo/Province'
import { UbigeoRepository } from 'domain/repository/UbigeoRepository'

const GetProvinces = (id:number,
                      {ubigeoRepository}:{ubigeoRepository: UbigeoRepository}) : Promise<Province[]> => {
  return ubigeoRepository.getProvinces(id)
}

export {
  GetProvinces
}
