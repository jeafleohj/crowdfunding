import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Region } from './Region'
import { District } from './District'

@Entity()
export class Province {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 50,
    nullable: true,
    type: "varchar",
  })
  name: string

  @ManyToOne(()=>Region, region=>region.provinces)
  region: Region

  @OneToMany(()=>District, district=>district.id, {
    cascade: true
  })
  districts: District[]
}
