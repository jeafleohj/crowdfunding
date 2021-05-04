import {Context} from 'koa'
import jwt from 'jsonwebtoken'
import uniqid from 'uniqid'
import { userData } from 'domain/entity/User'
import { ValidateLogin } from 'application/use_cases/Login'
import { ErrorHandler } from 'application/error'

async function generateToken(payload: any): Promise<string> {
  const jid = uniqid()
  const token = jwt.sign(
    payload,
    'Key',
    {
      expiresIn: '10 days',
      jwtid: jid
    }
  )
  return token
}

const login = async (ctx: Context) => {
  const data = ctx.request.body as userData
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
