import { District } from 'infrastructure/orm/typeorm/models/Ubigeo/District'
import { Province } from 'infrastructure/orm/typeorm/models/Ubigeo/Province'
import { Region } from 'infrastructure/orm/typeorm/models/Ubigeo/Region'
import { UbigeoRepository } from "domain/repository/UbigeoRepository"
import { getRepository, Repository } from 'typeorm'

export class ubigeoRepository implements UbigeoRepository {
  private regionRepository: Repository<Region>
  constructor() {
    this.regionRepository = getRepository(Region)
  }

  getRegions(): Promise<Region[]> {
    return this.regionRepository.find()
  }

  getProvinces(): Promise<Province[]> {
    throw new Error('Method not implemented.')
  }

  getDistricts(): Promise<District[]> {
    throw new Error('Method not implemented.')
  }
}
