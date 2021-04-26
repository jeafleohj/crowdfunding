import { createCampaign, getCampaigns } from 'interfaces/controllers/campaign.controller'
import Router from 'koa-router'

const campaignRouter = new Router()

campaignRouter.prefix('/user')

campaignRouter
  .get('/campaign', getCampaigns)
  .post('/campaign', createCampaign)

export {
  campaignRouter
}
