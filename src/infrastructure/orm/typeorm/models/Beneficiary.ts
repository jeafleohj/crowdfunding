import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Beneficiary  {
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
    type: 'char'
  })
  document: string
  @Column()
  age: number
  @Column({
    length: 50,
    type: 'varchar'
  })
  district?: number
  @Column({
    length: 50,
    type: 'varchar',
    nullable: true,
  })
  address: string
  @Column()
  status: string //Check this

}
