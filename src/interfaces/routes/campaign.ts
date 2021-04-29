import { ValidateToken } from 'interfaces/controllers/tokenblacklisting.controller'
import { createCampaign, getCampaigns } from 'interfaces/controllers/campaign.controller'
import jwt from 'koa-jwt'
import Router from 'koa-router'

const campaignRouter = new Router()

campaignRouter
  .prefix('/user/campaign')
  .use(jwt({
    secret: 'Key'
  }))
//  .use(ValidateToken)


campaignRouter
  .get('/', getCampaigns)
  .post('/', createCampaign)

export {
  campaignRouter
}
