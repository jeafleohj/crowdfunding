import multer from '@koa/multer'
import {
  createCampaign,
  getCampaignById,
  getCampaigns,
  getCover,
  updateCampaign,
  createResource,
  closeCampaign,
  checkCampaignStatus,
} from 'interfaces/controllers/campaign.controller'
import { createDistribution, generateDistribution, getDistribution, getDistributionBeneficiary } from 'interfaces/controllers/distribution.controller'
import Router from 'koa-router'

const upload = multer({ dest: 'tmp/csv' })
const campaignRouter = new Router()

campaignRouter
  .prefix('/user/campaign')

campaignRouter
  .use('/:campaignId', checkCampaignStatus)

campaignRouter
  .post('/', createCampaign)
  .get('/', getCampaigns, getCampaignById)
  .get('/cover/:campaignId', getCover)
  .post('/:campaignId/beneficiary/:beneficiaryId', createDistribution)
  .post('/:campaignId/distribution', generateDistribution)
  .get('/:campaignId/distribution', getDistribution)
  .get('/:campaignId/distribution/:beneficiaryId', getDistributionBeneficiary)
  .post('/:campaignId/resources', upload.single('file'), createResource)
  .post('/:campaignId/close', closeCampaign)
  .put('/:campaignId', updateCampaign)

export {
  campaignRouter
}
