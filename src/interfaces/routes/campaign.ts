import { createCampaign, getCampaigns } from 'interfaces/controllers/campaign.controller'
import jwt from 'koa-jwt'
import Router from 'koa-router'

const campaignRouter = new Router()

campaignRouter.use(jwt({
  secret: 'Key'
}))

campaignRouter.prefix('/user')

campaignRouter
  .get('/campaign', getCampaigns)
  .post('/campaign', createCampaign)

export {
  campaignRouter
}
