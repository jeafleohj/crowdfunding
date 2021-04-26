import { User, userData } from 'domain/entity/User'
import { UserRepository } from 'domain/repository/UserRepository'


const CreateUser = (data: userData,
  { userRepository }: { userRepository: UserRepository }): Promise<User> => {
  const user = new User(data)
  return userRepository.persist(user)
}

export {
  CreateUser
}
