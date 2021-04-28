import { District } from 'infrastructure/orm/typeorm/models/Ubigeo/District'
import { Province } from 'infrastructure/orm/typeorm/models/Ubigeo/Province'
import { Region } from 'infrastructure/orm/typeorm/models/Ubigeo/Region'
import { IUbigeoRepository } from "domain/repository/UbigeoRepository"
import { getRepository, Repository } from 'typeorm'

export class UbigeoRepository implements IUbigeoRepository {
  private regionRepository: Repository<Region>
  private provinceRepository: Repository<Province>
  private districtRepository: Repository<District>
  constructor() {
    this.regionRepository = getRepository(Region)
    this.provinceRepository = getRepository(Province)
    this.districtRepository = getRepository(District)
  }

  getRegions(): Promise<Region[]> {
    return this.regionRepository.find()
  }

  getProvinces(id: number): Promise<Province[]> {
    return this.provinceRepository.find({
      where: [
        {region: {id}}
      ]
    })
  }

  getDistricts(id: number): Promise<District[]> {
    return this.districtRepository.find({
      where: [
        {province: {id}}
      ]
    })
  }
}
