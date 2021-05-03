import {
  AddToken,
  FindToken,
} from 'application/use_cases/tokenblacklisting'
import { Context, Next } from 'koa'

const addToken = async (ctx: Context) => {
  const jwtid = ctx.state.user.jti
  await AddToken(jwtid, ctx)
  ctx.status = 200
}

const validateToken = async (ctx: Context, next: Next) => {
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
  validateToken
}
