import {Context} from 'koa'
import { ErrorHandler } from 'application/error'
import { User } from 'domain/entity'
import { ValidateLogin } from 'application/use_cases/user'
import { generateToken } from 'utils/generateToken'


const login = async (ctx: Context) => {
  const data = ctx.request.body as User
  let {valid, user} = await ValidateLogin(data, ctx)
  delete user['password']
  let token: string
  if(valid) {
    token = await generateToken({
      id: user.id,
      email: data.email
    })
    ctx.body = {
      error: false,
      data: user,
      token,
      status: 200,
      message: 'ok'
    }
  } else {
    throw new ErrorHandler({
      status: 401,
      message: 'Contraseña incorrecta',
    })
  }
}

export {
  login
}
