import { District } from 'infrastructure/orm/typeorm/models/Ubigeo/District'
import { Province } from 'infrastructure/orm/typeorm/models/Ubigeo/Province'
import { Region } from 'infrastructure/orm/typeorm/models/Ubigeo/Region'
import { UbigeoRepository } from "domain/repository/UbigeoRepository"
import { getRepository, Repository } from 'typeorm'

export class ubigeoRepository implements UbigeoRepository {
  private regionRepository: Repository<Region>
  private provinceRepository: Repository<Province>
  constructor() {
    this.regionRepository = getRepository(Region)
    this.provinceRepository = getRepository(Province)
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
    throw new Error('Method not implemented.')
  }
}
