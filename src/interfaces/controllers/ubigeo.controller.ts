import { Context, Next } from 'koa'
import { GetRegions } from 'application/use_cases/ubigeo'
import { GetProvinces } from 'application/use_cases/ubigeo/GetProvinces'

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

const getProvinces = async (ctx: Context, next: Next) => {
  const id = ctx.params.id
  const provinces = await GetProvinces(id,ctx)
  ctx.body = {
    error: false,
    data: provinces,
    status: 200,
    message: 'ok'
  }
  next()
}

export {
  getRegions,
  getProvinces
}
