import { Context } from 'koa'
import { ErrorHandler } from 'application/error'
import { User } from 'domain/entity'
import { CreateUser, ValidateLogin } from 'application/use_cases/user'
import { generateToken } from 'utils/generateToken'
import { google } from 'googleapis'
import { GetUserByEmail } from 'application/use_cases/user/GetUserByEmail'

const login = async (ctx: Context) => {
  const data = ctx.request.body as User
  let { valid, user } = await ValidateLogin(data, ctx)
  delete user['password']
  let token: string
  if (valid) {
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

const loginGoogle = async (ctx: Context) => {
  const { code } = ctx.request.body
  const redirectUrl = 'http://localhost:3000'
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    redirectUrl
  );

  const { tokens } = await oauth2Client.getToken(code)
  oauth2Client.setCredentials(tokens)

  const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client })
  const { data } = await oauth2.userinfo.v2.me.get()
  let resp: any
    = { name: data.given_name, lastname: data.family_name, email: data.email }
  let user = await CreateUser(resp, ctx)

  let tokendata = { id: 0, email: '' }
  if ( typeof user === 'number' ) {
    tokendata.id = user
    user = await GetUserByEmail(resp.email, ctx)
  } else {
    tokendata.id = user.id
  }
  tokendata.email = resp.email
  let token = await generateToken(tokendata)
  ctx.body = { token, data: user }
  ctx.status = 200
}

export {
  login,
  loginGoogle,
}
