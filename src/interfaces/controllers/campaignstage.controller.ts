import { Context, Next } from 'koa'
import {
  CreateStage
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
    startDate
  })
  console.log(stage)
  await CreateStage(stage, ctx)
  ctx.status = 200
}

export {
  createCampaignStage
}
