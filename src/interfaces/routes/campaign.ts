import {
  createCampaign,
  getCampaignById,
  getCampaigns,
  getCover,
  updateCampaign,
} from 'interfaces/controllers/campaign.controller'
import { createDistribution, generateDistribution, getDistribution } from 'interfaces/controllers/distribution.controller'
import Router from 'koa-router'

const campaignRouter = new Router()

campaignRouter
  .prefix('/user/campaign')

campaignRouter
  .get('/', getCampaigns, getCampaignById)
  .get('/cover/:id', getCover)
  .post('/', createCampaign)
  .post('/:id/beneficiary/:beneficiaryId', createDistribution )
  .post('/:id/distribution', generateDistribution )
  .get('/:id/distribution/:beneficiaryId', getDistribution )
  .put('/:id', updateCampaign)

export {
  campaignRouter
}
