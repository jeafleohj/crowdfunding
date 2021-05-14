import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import { CampaignEntity } from '.';
import { SharedProps } from './SharedProps'

@Entity('giver')
export class GiverEntity extends SharedProps {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    type: "varchar",
  })
  name: string

  @Column({
    length: 50,
    type: 'varchar'
  })
  lastname: string

  @Column({
    length: 8,
    type: 'char',
    unique: true
  })
  document: string

  @Column()
  phone?: string

  @Column({
    unique: true
  })
  email: string

  @Column()
  userId: number

  @Column()
  campaignId: number
}
