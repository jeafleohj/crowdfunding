import {
  CreateDonation,
  RemoveDonation,
  UpdateDonation,
  ListDonations
} from 'application/use_cases/donation/'
import { Context, Next } from 'koa'

const createDonation = async (ctx: Context, next: Next): Promise<void> => {
  let data = ctx.request.body
  const response = await CreateDonation(data, ctx)
  ctx.body = response
  ctx.status = 200
}

const listDonations = async (ctx: Context, next: Next): Promise<void> => {
  const campaignId = ctx.params.id
  const response = await ListDonations(campaignId, ctx)
  ctx.body = response
  ctx.status = 200
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
  listDonations,
  updateDonation,
  removeDonation
}
