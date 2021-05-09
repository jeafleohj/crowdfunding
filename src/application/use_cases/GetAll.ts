import { User } from 'domain/entity'
import { IUserRepository } from 'domain/repository'

const GetAll = async ({userRepository}:{userRepository: IUserRepository} ) : Promise<User[]> => {
  const response = await userRepository.getAll()
  const users = response.map( el => {
    return new User(el)
  })
  return users
}

export {
  GetAll
}
