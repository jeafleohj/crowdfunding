import { Context, Next } from 'koa'
import {
  GetDistricts,
  GetProvinces,
  GetRegions,
} from 'application/use_cases/ubigeo'

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

const getDistricts = async (ctx: Context, next: Next) => {
  const id = ctx.params.id
  const districts = await GetDistricts(id, ctx)
  ctx.body = {
    error: false,
    data: districts,
    status: 200,
    message: 'ok'
  }
  next()
}

export {
  getDistricts,
  getProvinces,
  getRegions,
}
