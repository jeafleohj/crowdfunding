import { Province } from "./Province";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Region {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: "varchar",
    length: 50,
    nullable: true
  })
  name: string

  @OneToMany(()=>Province, province=>province.id)
  provinces: Province[]
}
