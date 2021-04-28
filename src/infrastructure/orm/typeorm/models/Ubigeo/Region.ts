import { ProvinceEntity } from "./Province";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('region')
export class RegionEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: "varchar",
    length: 50,
    nullable: true
  })
  name: string

  @OneToMany(()=>ProvinceEntity, province=>province.id, {
    cascade: true
  })
  provinces: ProvinceEntity[]
}
