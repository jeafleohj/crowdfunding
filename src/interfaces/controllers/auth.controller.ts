import {Context} from 'koa'
import jwt from 'jsonwebtoken'
import { userData } from 'domain/User'
import { ValidateLogin } from 'application/use_cases/Login'

async function generateToken(payload: any): Promise<string> {
  const token = jwt.sign(
    payload,
    'Key',
    {
      expiresIn: '10 days',
      jwtid: 'holi'
    }
  )
  return token
}

const login = async (ctx: Context) => {
  const data = ctx.request.body as userData
  const {valid, id} = await ValidateLogin(data, ctx)
  let token: string
  if(valid) {
    token = await generateToken({
      id: id,
      email: data.email
    })
    ctx.body = {
      error: false,
      token,
      status: 200,
      message: 'ok'
    }
  } else {
    //Custom error handler
    throw new Error('Contraseña invalida')
  }
}

export {
  login
}
