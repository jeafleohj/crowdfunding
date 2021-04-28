import { User, userData } from 'domain/entity/User'
import { IUserRepository } from 'domain/repository/UserRepository'


const CreateUser = (data: userData,
  { userRepository }: { userRepository: IUserRepository }): Promise<User> => {
  const user = new User(data)
  return userRepository.persist(user)
}

export {
  CreateUser
}
