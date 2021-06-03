import {
  District,
  Province,
  Region,
} from 'domain/entity/ubigeo';

export interface IUbigeoRepository {
  getRegions(): Promise<Region[]>
  getProvinces(id: number): Promise<Province[]>
  getDistricts(id: number): Promise<District[]>
  getDistrict(id: string): Promise<District>
  getProvince(id: string): Promise<Province>
}
