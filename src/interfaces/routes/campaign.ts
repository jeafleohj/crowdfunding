import {
  createCampaign,
  getCampaignById,
  getCampaigns,
  updateCampaign,
} from 'interfaces/controllers/campaign.controller'
import Router from 'koa-router'

const campaignRouter = new Router()

campaignRouter
  .prefix('/user/campaign')


campaignRouter
  .get('/', getCampaigns, getCampaignById)
  .post('/', createCampaign)
  .put('/:id', updateCampaign)

export {
  campaignRouter
}
