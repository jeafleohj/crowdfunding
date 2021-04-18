import {User, userData} from 'domain/User'
import {UserRepository} from 'domain/UserRepository'


const CreateUser = (data: userData,
                    {userRepository}:{userRepository: UserRepository} ) : Promise<User> => {
  const user = new User(data);
  return userRepository.persist(user)
}

export {
  CreateUser
}
