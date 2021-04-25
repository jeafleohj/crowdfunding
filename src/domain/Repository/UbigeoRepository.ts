import { Ubigeo } from 'domain/Ubigeo'
export interface UbigeoRepository {
  getRegions(): Promise<Ubigeo>
  getProvinces(): Promise<Ubigeo>
  getDistricts(): Promise<Ubigeo>
}
