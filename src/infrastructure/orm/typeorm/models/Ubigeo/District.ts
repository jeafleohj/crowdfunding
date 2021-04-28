import { ProvinceEntity } from './Province'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity('district')
export class DistrictEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 50,
    nullable: true,
    type: "varchar",
  })
  name: string

  @ManyToOne(()=>ProvinceEntity, province=>province.districts)
  province: ProvinceEntity
}
