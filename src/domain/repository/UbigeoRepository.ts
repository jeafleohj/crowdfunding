import { District } from 'domain/entity/ubigeo/District';
import { Province } from 'domain/entity/ubigeo/Province';
import { Region } from 'domain/entity/ubigeo/Region'

export interface IUbigeoRepository {
  getRegions(): Promise<Region[]>
  getProvinces(id: number): Promise<Province[]>
  getDistricts(id: number): Promise<District[]>
}
