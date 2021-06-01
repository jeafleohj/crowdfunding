import { ProvinceEntity } from "./Province";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('region')
export class RegionEntity {
  @PrimaryColumn({
    length: 2,
    type: "char",
  })
  id: string

  @Column({
    type: "varchar",
    length: 50,
  })
  name: string

  @OneToMany(()=>ProvinceEntity, province=>province.id, {
    cascade: true
  })
  provinces: ProvinceEntity[]
}
