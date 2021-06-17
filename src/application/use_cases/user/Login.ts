import { IUserRepository } from 'domain/repository'
import bcrypt from 'bcryptjs'
import { ErrorHandler } from 'application/error'
import { User } from 'domain/entity'

const ValidateLogin = async (data: User,
                         {userRepository}:{userRepository: IUserRepository}) : Promise<any> =>  {
  const {email, password} = data
  const user = await userRepository.getByEmail(email)
  if(user === undefined) {
    throw new ErrorHandler({
      status: 401,
      message: 'El correo electrónico que ingresó no pertenece a ninguna cuenta.',
    })
  }
  const valid = await bcrypt.compare(password, user.password)
  return {
    user,
    valid
  }
}

export {
  ValidateLogin
}
