import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'
import { RegionEntity } from './Region'
import { DistrictEntity } from './District'

@Entity('province')
export class ProvinceEntity {
  @PrimaryColumn({
    length: 4,
    type: "char",
  })
  id: string

  @Column({
    length: 50,
    type: "varchar",
  })
  name: string

  @ManyToOne(()=>RegionEntity, region=>region.provinces)
  region: RegionEntity

  @OneToMany(()=>DistrictEntity, district=>district.id, {
    cascade: true
  })
  districts: DistrictEntity[]
}
