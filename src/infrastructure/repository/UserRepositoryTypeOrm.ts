import {User} from 'infrastructure/orm/typeorm/models/User'
import {UserRepository} from 'domain/UserRepository'
import {getRepository} from 'typeorm'

export class userRepository implements UserRepository {

  async persist(domainUser: User): Promise<User> {
    console.log(domainUser)
    const users = getRepository(User)
    const new_user = users.create(domainUser)
    return users.save(new_user)
  }

  merge(domainUser: User): void {
    throw new Error('Method not implemented.');
  }

  remove(userId: number): void {
    throw new Error('Method not implemented.');
  }

  get(): Promise<any> {
    const users = getRepository(User)
    return users.find()
  }

  getByEmail(email: string): void {
    throw new Error('Method not implemented.');
  }

  find(): void {
    throw new Error('Method not implemented.');
  }

}
