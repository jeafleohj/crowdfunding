import { User } from 'domain/Entity/User'
import { UserRepository } from 'domain/Repository/UserRepository'

const GetAll = ({userRepository}:{userRepository: UserRepository} ) : Promise<User[]> => {
  return userRepository.get()
}

export {
  GetAll
}
