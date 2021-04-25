import { Region } from 'domain/entity/ubigeo/Region'
export interface UbigeoRepository {
   getRegions(): Promise<[]>
}
