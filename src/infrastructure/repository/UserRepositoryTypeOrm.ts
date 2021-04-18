import {User} from 'domain/User'
import {UserRepository} from 'domain/UserRepository'
import {getRepository} from 'typeorm'

module.exports = class implements UserRepository {

  async persist(domainUser: User): Promise<User> {
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

  get(userId: number): void {
    throw new Error('Method not implemented.');
  }

  getByEmail(email: string): void {
    throw new Error('Method not implemented.');
  }

  find(): void {
    throw new Error('Method not implemented.');
  }

}
