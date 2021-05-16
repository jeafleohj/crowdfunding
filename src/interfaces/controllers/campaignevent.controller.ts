import { Context, Next } from 'koa'
import {
  CreateEvent,
  GetEventByCampaign,
} from 'application/use_cases/campaignevent'
import { CampaignEvent } from 'domain/entity'

const createCampaignEvent = async (ctx: Context, next: Next) => {
  let body = ctx.request.body
  let data = body  as CampaignEvent
  let campaign: number = parseInt(ctx.params.id)

  data.endingDate = new Date(`${body.endingDate}`)
  data.startDate = new Date(`${body.startDate}`)

  let stage = new CampaignEvent({
    ...data,
    campaign
  })
  await CreateEvent(stage, ctx)
  ctx.status = 200
}

const getByCampaign = async (ctx: Context, next: Next) => {
  const campaignId = ctx.params.id
  const response = await GetEventByCampaign(campaignId, ctx)
  ctx.body = response
  ctx.status = 200
}

export {
  createCampaignEvent,
  getByCampaign,
}