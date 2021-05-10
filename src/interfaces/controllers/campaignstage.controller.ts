import { Context, Next } from 'koa'
import {
  CreateStage,
  GetStageByCampaign,
} from 'application/use_cases/campaignstage'
import { CampaignStage } from 'domain/entity'

const createCampaignStage = async (ctx: Context, next: Next) => {
  let body = ctx.request.body
  let data = body  as CampaignStage
  let endDate = new Date(`${body.endingDate}T${body.endingTime}`)
  let startDate = new Date(`${body.startDate}T${body.startTime}`)
  let campaign: number = parseInt(ctx.params.id)
  let stage = new CampaignStage({
    ...data,
    campaign,
    endDate,
    startDate,
  })
  await CreateStage(stage, ctx)
  ctx.status = 200
}

const getByCampaign = async (ctx: Context, next: Next) => {
  const campaignId = ctx.params.id
  const response = await GetStageByCampaign(campaignId, ctx)
  ctx.body = response
  ctx.status = 200

}

export {
  createCampaignStage,
  getByCampaign,
}
