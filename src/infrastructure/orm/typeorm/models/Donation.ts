import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('donation')
export class DonationEntity {
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
