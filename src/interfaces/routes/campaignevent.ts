import { createCampaignEvent, getByCampaign } from 'interfaces/controllers/campaignevent.controller'
import Router from 'koa-router'

const campaignEventRouter = new Router()

campaignEventRouter
  .prefix('/user/campaign')

campaignEventRouter
  .post('/:id/stage', createCampaignEvent)
  .get('/:id/stage', getByCampaign)

export {
  campaignEventRouter
}
