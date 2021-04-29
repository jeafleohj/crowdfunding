import { AddToken } from 'application/use_cases/tokenblacklisting/AddToken'
import { FindToken } from 'application/use_cases/tokenblacklisting/FindToken'
import { Context, Next } from 'koa'

const addToken = async (ctx: Context) => {
  const jwtid = ctx.state.user.jti
  const response = await AddToken(jwtid, ctx)
  console.log(response)
  ctx.status = 200
  ctx.body = response
}

const ValidateToken = async (ctx: Context, next: Next) => {
  const jwtid = ctx.state.user.jti
  const valid = await FindToken(jwtid, ctx)
  if ( valid ) {
    ctx.status = 401
  } else {
    await next()
  }
}

export {
  addToken,
  ValidateToken
}
