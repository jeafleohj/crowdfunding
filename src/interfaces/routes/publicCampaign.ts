import {
  getDetails,
  getPublicCampaigns,
} from 'interfaces/controllers/campaign.controller'
import Router from 'koa-router'

const publicCampaignRouter = new Router()

publicCampaignRouter
  .prefix('/campaign')

  publicCampaignRouter
  .get('/public/:campaignId', getDetails)
  .get('/public', getPublicCampaigns)

export {
  publicCampaignRouter
}
