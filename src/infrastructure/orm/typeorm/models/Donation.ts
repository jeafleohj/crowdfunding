import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { SharedProps } from './SharedProps'

@Entity('donation')
export class DonationEntity extends SharedProps {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 50,
    type: "varchar",
  })
  name: string

  @Column({
    length: 50,
    type: 'varchar'
  })
  description: string

  @Column({
    length: 50,
    type: 'varchar'
  })
  category: string

  @Column()
  amountByBeneficiary: number
}
