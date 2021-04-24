import { userData } from 'domain/User'
import { UserRepository } from 'domain/UserRepository'
import bcrypt from 'bcryptjs'

const ValidateLogin = async (data: userData,
                         {userRepository}:{userRepository: UserRepository}) : Promise<any> =>  {
  const {email, password} = data
  const user = await userRepository.getByEmail(email)
  const valid = await bcrypt.compare(password, user.password)
  return {
    id: user.id,
    valid
  }
}

export {
  ValidateLogin
}