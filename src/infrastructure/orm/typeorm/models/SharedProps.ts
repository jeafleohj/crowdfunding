import { CreateDateColumn, UpdateDateColumn } from 'typeorm'

export class SharedProps {
  @CreateDateColumn()
  createdAt?: Date

  @UpdateDateColumn()
  updateAt?: Date

}
