import { createCampaign, getCampaigns } from 'interfaces/controllers/campaign.controller'
import Router from 'koa-router'

const campaignRouter = new Router()

campaignRouter
  .prefix('/user/campaign')


campaignRouter
  .get('/', getCampaigns)
  .post('/', createCampaign)

export {
  campaignRouter
}
