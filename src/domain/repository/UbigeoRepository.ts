import { District } from 'domain/entity/ubigeo/District';
import { Province } from 'domain/entity/ubigeo/Province';
import { Region } from 'domain/entity/ubigeo/Region'

export interface UbigeoRepository {
  getRegions(): Promise<Region[]>
  getProvinces(): Promise<Province[]>
  getDistricts(): Promise<District[]>
}
