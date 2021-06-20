import { CreateUser } from 'application/use_cases/user'
import { AddVolunteer } from 'application/use_cases/volunteer/AddVolunteer'
import { GetByCampaign } from 'application/use_cases/volunteer/GetByCampaign'
import { GetCampaigns } from 'application/use_cases/volunteer/GetCampaigns'
import { RemoveVolunteer } from 'application/use_cases/volunteer/RemoveVolunteer'
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

const getCampaigns = async (ctx: Context, next: Next): Promise<void> => {
  const user = ctx.state.user.id
  const response = await GetCampaigns(user , ctx)
  const data = response.map( (volunteer:any) => {
    delete volunteer.campaign.beneficiaries
    return volunteer.campaign
  })
  ctx.body = data

}

const removeVolunteer = async (ctx: Context): Promise<void> => {
  let data = ctx.request.body
  const response = await RemoveVolunteer(data.volunteerId, ctx)
  ctx.body = response
  ctx.status = 200
}

export {
  addVolunteer,
  getByCampaign,
  getCampaigns,
  removeVolunteer
}
