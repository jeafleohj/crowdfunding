import { createCampaign, getCampaigns } from 'interfaces/controllers/campaign.controller'
import jwt from 'koa-jwt'
import Router from 'koa-router'

const campaignRouter = new Router()

campaignRouter.prefix('/user/campaign')

campaignRouter.use(jwt({
  secret: 'Key'
}))

campaignRouter
  .get('/', getCampaigns)
  .post('/', createCampaign)

export {
  campaignRouter
}
