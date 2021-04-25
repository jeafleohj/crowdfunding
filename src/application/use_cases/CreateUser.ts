import { User, userData } from 'domain/Entity/User'
import { UserRepository } from 'domain/Repository/UserRepository'


const CreateUser = (data: userData,
                    {userRepository}:{userRepository: UserRepository} ) : Promise<User> => {
  const user = new User(data);
  return userRepository.persist(user)
}

export {
  CreateUser
}
