import { User } from 'domain/entity/User'
import { UserRepository } from 'domain/repository/UserRepository'

const GetAll = ({userRepository}:{userRepository: UserRepository} ) : Promise<User[]> => {
  return userRepository.getAll()
}

export {
  GetAll
}
