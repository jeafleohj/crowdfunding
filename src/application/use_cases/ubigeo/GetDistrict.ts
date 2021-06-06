import { District } from 'domain/entity/ubigeo'

const GetDistrict = (id: string, { ubigeoRepository }: MyRepository) : Promise<District> => {
  return ubigeoRepository.getDistrict(id)
}

export {
  GetDistrict
}
