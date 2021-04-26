import { createCampaign, getCampaigns } from 'interfaces/controllers/campaign.controller'
import Router from 'koa-router'

const userRouter = new Router()

userRouter.prefix('/user')

userRouter
  .get('/campaign', getCampaigns)
  .post('/campaign', createCampaign)

export {
  userRouter
}
