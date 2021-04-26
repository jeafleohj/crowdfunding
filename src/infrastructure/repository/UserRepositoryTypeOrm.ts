import { User } from 'infrastructure/orm/typeorm/models/User'
import { UserRepository } from 'domain/repository/UserRepository'
import { getRepository, Repository } from 'typeorm'

export class userRepository implements UserRepository {
  private repository: Repository<User>
  constructor() {
    this.repository = getRepository(User)
  }

  async persist(domainUser: User): Promise<User> {
    const new_user = this.repository.create(domainUser)
    return this.repository.save(new_user)
  }

  merge(domainUser: User): void {
    throw new Error('Method not implemented.');
  }

  remove(userId: number): void {
    throw new Error('Method not implemented.');
  }

  getAll(): Promise<any> {
    return this.repository.find()
  }

  async getByEmail(email: string): Promise<any> {
    const user = await this.repository.findOne({email}) as User
    return user
  }

  find(): void {
    throw new Error('Method not implemented.');
  }

}
