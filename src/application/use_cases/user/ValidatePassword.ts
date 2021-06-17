import { IUserRepository } from 'domain/repository'
import bcrypt from 'bcryptjs'
import { ErrorHandler } from 'application/error'
import { User } from 'domain/entity'

const ValidatePassword = async (id: number, password: string,
                         {userRepository}:{userRepository: IUserRepository}) : Promise<any> =>  {
  const user = await userRepository.getById(id)
  const valid = await bcrypt.compare(password, user.password)
  return valid
}

export {
  ValidatePassword
}
