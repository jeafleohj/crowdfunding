import { User } from 'domain/entity/User'
import { IUserRepository } from 'domain/repository'


const CreateUser = async (data: User,
  { userRepository }: { userRepository: IUserRepository }): Promise<User|number> => {
  const user = await userRepository.getByEmail(data.email)
  if ( user === undefined) {
    const new_user = new User(data)
    return userRepository.persist(new_user)
  }
  return user.id
}

export {
  CreateUser
}
