import { Context, Next } from 'koa'
import { GetRegions } from 'application/use_cases/ubigeo'

const getRegions = async (ctx: Context, next: Next) => {
  const regions = await GetRegions(ctx)
  ctx.body = {
    error: false,
    data: regions,
    status: 200,
    message: 'ok'
  }
  next()
}

export {
  getRegions
}
