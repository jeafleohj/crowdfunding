import {Context} from 'koa'
import jwt from 'jsonwebtoken'
import uniqid from 'uniqid'
import { ErrorHandler } from 'application/error'
import { User } from 'domain/entity'
import { ValidateLogin } from 'application/use_cases/user'

async function generateToken(payload: any): Promise<string> {
  const jid = uniqid()
  const token = jwt.sign(
    payload,
    process.env.JWT_KEY as string,
    {
      expiresIn: process.env.JWT_EXPIRE,
      jwtid: jid
    }
  )
  return token
}

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
