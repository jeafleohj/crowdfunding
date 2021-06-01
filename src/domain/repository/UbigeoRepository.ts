import {
  District,
  Province,
  Region,
} from 'domain/entity/ubigeo';

export interface IUbigeoRepository {
  getRegions(): Promise<Region[]>
  getProvinces(id: number): Promise<Province[]>
  getDistricts(id: number): Promise<District[]>
  getDistrict(id: number): Promise<District>
  getProvince(id: number): Promise<Province>
}
