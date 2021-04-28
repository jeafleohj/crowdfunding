import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { RegionEntity } from './Region'
import { DistrictEntity } from './District'

@Entity('province')
export class ProvinceEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 50,
    nullable: true,
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
