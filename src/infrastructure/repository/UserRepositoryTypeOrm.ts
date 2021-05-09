import { UserEntity } from 'infrastructure/orm/typeorm/models/User'
import { IUserRepository } from 'domain/repository/UserRepository'
import { getRepository, Repository } from 'typeorm'
import { User } from 'domain/entity'

export class UserRepository implements IUserRepository {
  private repository: Repository<UserEntity>
  constructor() {
    this.repository = getRepository(UserEntity)
  }

  async persist(domainUser: UserEntity): Promise<UserEntity> {
    const new_user = this.repository.create(domainUser)
    return this.repository.save(new_user)
  }

  merge(domainUser: UserEntity): void {
    throw new Error('Method not implemented.');
  }

  remove(userId: number): void {
    throw new Error('Method not implemented.');
  }

  getAll(): Promise<User[]> {
    return this.repository.find()
  }

  async getByEmail(email: string): Promise<any> {
    const user = await this.repository.findOne({email}) as UserEntity
    return user
  }

  find(): void {
    throw new Error('Method not implemented.');
  }

}
