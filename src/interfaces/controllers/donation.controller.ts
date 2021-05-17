import {
  CreateDonation,
  RemoveDonation,
  UpdateDonation,
} from 'application/use_cases/donation/'
import { Context, Next } from 'koa'

const createDonation = async (ctx: Context, next: Next): Promise<void> => {
  let data = ctx.request.body
  const response = await CreateDonation(data, ctx)
  ctx.body = {
    error: false,
    data: response,
    status: 200,
    message: 'ok'
  }
  next()

}

const updateDonation = async (ctx: Context, next: Next): Promise<void> => {
  let data = ctx.request.body
  const response = await UpdateDonation(data, ctx)
  ctx.body = response
  ctx.status = 200
  next()
}

const removeDonation = async (ctx: Context, next: Next): Promise<void> => {
  let data = ctx.request.body
  const response = await RemoveDonation(data, ctx)
  ctx.body = response
  ctx.status = 200
  next()
}


export {
  createDonation,
  updateDonation,
  removeDonation
}
