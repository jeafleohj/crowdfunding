import { UserEntity } from 'infrastructure/orm/typeorm/models/User'
import { IUserRepository } from 'domain/repository/UserRepository'
import { getRepository, Like, Repository } from 'typeorm'
import { User } from 'domain/entity'
import { KeyObject } from 'node:crypto'

export class UserRepository implements IUserRepository {
  private repository: Repository<UserEntity>
  constructor() {
    this.repository = getRepository(UserEntity)
  }

  async getById(id: number): Promise<User> {
    const user = await this.repository.findOne({id}) as UserEntity
    return user
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

  updateUser(id: number, data: Partial<User>): Promise<any> {
    return this.repository
      .createQueryBuilder()
      .update()
      .set(data)
      .where('id = :id', {id})
      .execute()
  }

  find(): void {
    throw new Error('Method not implemented.');
  }

  getByQuery(projection: Array<string>,
             where: string,
             pattern: string): Promise<{}> {
    const response = this.repository
      .createQueryBuilder('user')
      .select(projection)
      .where(`concat(${where}) like :pattern`, {pattern: `%${pattern}%`})
      .orderBy('name')
      .getMany()

    return response
  }

}
