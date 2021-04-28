import { DistrictEntity } from 'infrastructure/orm/typeorm/models/Ubigeo/District'
import { ProvinceEntity } from 'infrastructure/orm/typeorm/models/Ubigeo/Province'
import { RegionEntity } from 'infrastructure/orm/typeorm/models/Ubigeo/Region'
import { IUbigeoRepository } from "domain/repository/UbigeoRepository"
import { getRepository, Repository } from 'typeorm'

export class UbigeoRepository implements IUbigeoRepository {
  private regionRepository: Repository<RegionEntity>
  private provinceRepository: Repository<ProvinceEntity>
  private districtRepository: Repository<DistrictEntity>
  constructor() {
    this.regionRepository = getRepository(RegionEntity)
    this.provinceRepository = getRepository(ProvinceEntity)
    this.districtRepository = getRepository(DistrictEntity)
  }

  getRegions(): Promise<RegionEntity[]> {
    return this.regionRepository.find()
  }

  getProvinces(id: number): Promise<ProvinceEntity[]> {
    return this.provinceRepository.find({
      where: [
        {region: {id}}
      ]
    })
  }

  getDistricts(id: number): Promise<DistrictEntity[]> {
    return this.districtRepository.find({
      where: [
        {province: {id}}
      ]
    })
  }
}
