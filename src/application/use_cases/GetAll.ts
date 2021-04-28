import { User } from 'domain/entity/User'
import { IUserRepository } from 'domain/repository/UserRepository'

const GetAll = ({userRepository}:{userRepository: IUserRepository} ) : Promise<User[]> => {
  return userRepository.getAll()
}

export {
  GetAll
}
