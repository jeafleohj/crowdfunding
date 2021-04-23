import { User } from 'domain/User'
import { UserRepository } from 'domain/UserRepository'

const GetAll = ({userRepository}:{userRepository: UserRepository} ) : Promise<User[]> => {
  return userRepository.get()
}

export {
  GetAll
}
