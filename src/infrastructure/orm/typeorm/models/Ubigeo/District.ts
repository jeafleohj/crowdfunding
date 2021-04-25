import { Province } from './Province'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class District {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 50,
    nullable: true,
    type: "varchar",
  })
  name: string

  @ManyToOne(()=>Province, province=>province.districts)
  province: Province
}
