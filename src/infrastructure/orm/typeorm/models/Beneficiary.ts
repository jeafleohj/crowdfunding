import { beneficiaryStatus } from 'domain/entity/Beneficiary'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { SharedProps } from './SharedProps'

@Entity('beneficiary')
export class BeneficiaryEntity extends SharedProps {
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
  lastname: string

  @Column({
    length: 50,
    type: 'varchar'
  })
  maternal_lastname: string

  @Column()
  sex: string

  @Column()
  nse: string

  @Column({
    length: 8,
    type: 'char',
    unique: true
  })
  document: string

  @Column()
  age: number

  @Column()
  district?: number

  @Column()
  region?: number

  @Column()
  province?: number

  @Column({
    length: 50,
    type: 'varchar',
    nullable: true,
  })
  address: string

  @Column()
  handicapped: boolean

  @Column({
    type: 'enum',
    enum: beneficiaryStatus,
  })
  status: beneficiaryStatus
}
