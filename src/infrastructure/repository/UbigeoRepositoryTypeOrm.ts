import { DistrictEntity } from 'infrastructure/orm/typeorm/models/Ubigeo/District'
import { ProvinceEntity } from 'infrastructure/orm/typeorm/models/Ubigeo/Province'
import { RegionEntity } from 'infrastructure/orm/typeorm/models/Ubigeo/Region'
import { IUbigeoRepository } from "domain/repository/UbigeoRepository"
import { getRepository, Repository } from 'typeorm'
import { District, Province } from 'domain/entity/ubigeo'

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
        { region: { id } }
      ]
    })
  }

  getDistricts(id: number): Promise<DistrictEntity[]> {
    let districts = this.districtRepository.find({
      where: [
        { province: { id } }
      ],
    })
    return districts
  }

  async getDistrict(id: number): Promise<District> {
    const district = await this.districtRepository.findOne({
      where: [
        { id }
      ],
      join: {
        alias: 'district',
        leftJoinAndSelect: {
          Province: 'district.province',
        },
      }
    })
    return district as DistrictEntity
  }

  async getProvince(id: number): Promise<Province> {
    const province = await this.provinceRepository.findOne(id)
    return province as ProvinceEntity
  }
}
