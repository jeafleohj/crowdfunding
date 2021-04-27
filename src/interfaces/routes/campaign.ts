import { createCampaign, getCampaigns } from 'interfaces/controllers/campaign.controller'
import jwt from 'koa-jwt'
import Router from 'koa-router'

const campaignRouter = new Router()

campaignRouter.prefix('/user')

campaignRouter.use(jwt({
  secret: 'Key'
}))

campaignRouter
  .get('/campaign', getCampaigns)
  .post('/campaign', createCampaign)

export {
  campaignRouter
}
