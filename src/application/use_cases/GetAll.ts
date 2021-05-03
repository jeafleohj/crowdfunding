import { User } from 'domain/entity'
import { IUserRepository } from 'domain/repository'

const GetAll = ({userRepository}:{userRepository: IUserRepository} ) : Promise<User[]> => {
  return userRepository.getAll()
}

export {
  GetAll
}
