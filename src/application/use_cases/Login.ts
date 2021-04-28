import { userData } from 'domain/entity/User'
import { IUserRepository } from 'domain/repository/UserRepository'
import bcrypt from 'bcryptjs'

const ValidateLogin = async (data: userData,
                         {userRepository}:{userRepository: IUserRepository}) : Promise<any> =>  {
  const {email, password} = data
  const user = await userRepository.getByEmail(email)
  const valid = await bcrypt.compare(password, user.password)
  return {
    user,
    valid
  }
}

export {
  ValidateLogin
}
