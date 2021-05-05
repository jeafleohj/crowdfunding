import { CreateUser } from 'application/use_cases/CreateUser'
import { AddVolunteer } from 'application/use_cases/volunteer/AddVolunteer'
import { GetByCampaign } from 'application/use_cases/volunteer/GetByCampaign'
import { Context, Next } from 'koa'

const addVolunteer = async (ctx: Context, next: Next): Promise<void> => {
  const body = ctx.request.body
  const {campaign: campaignId, ...payload} = body
  const user = await CreateUser(payload ,ctx)
  const userId = typeof user === 'number' ? user : user.id
  const response = await AddVolunteer(campaignId, userId, ctx)
  ctx.status = 200
  ctx.body = response
}

const getByCampaign = async (ctx: Context, next: Next): Promise<void> => {
  const campaingId: number = ctx.params.id
  const response = await GetByCampaign(campaingId , ctx)
  ctx.body = response

}

export {
  addVolunteer,
  getByCampaign,
}
