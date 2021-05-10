import { createCampaignStage, getByCampaign } from 'interfaces/controllers/campaignstage.controller'
import Router from 'koa-router'

const campaignStageRouter = new Router()

campaignStageRouter
  .prefix('/user/campaign')

campaignStageRouter
  .post('/:id/stage', createCampaignStage)
  .get('/:id/stage', getByCampaign)

export {
  campaignStageRouter
}
