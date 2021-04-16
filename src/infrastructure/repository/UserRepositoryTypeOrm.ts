import {UserModel} from 'entity/User'
import {UserRepository} from 'entity/UserRepository'

module.exports = class implements UserRepository {

  persist(domainUser: UserModel): void {
    const {name, lastname, password, email} = domainUser

  }

  merge(domainUser: UserModel): void {
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
