import { CreateGiver } from 'application/use_cases/giver/CreateGiver'
import { Context, Next } from 'koa'

const createGiver = async (ctx: Context, next: Next): Promise<void> => {
  let data = ctx.request.body
  const response = await CreateGiver(data, ctx)
  console.log(response)
  ctx.body = response
}

// const getByCampaign = async (ctx: Context, next: Next): Promise<void> => {
//   const campaingId: number = ctx.params.id
//   const response = await GetByCampaign(campaingId, ctx)
//   ctx.body = response

// }

export {
  createGiver
  // updateDonation
}
