import { ProvinceEntity } from './Province'
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity('district')
export class DistrictEntity {
  @PrimaryColumn({
    length: 6,
    type: "char",
  })
  id: string

  @Column({
    length: 50,
    type: "varchar",
  })
  name: string

  @Column({
    length: 50,
    type: "varchar",
  })
  clasification: string

  @ManyToOne(()=>ProvinceEntity, province=>province.districts)
  province: ProvinceEntity
}
