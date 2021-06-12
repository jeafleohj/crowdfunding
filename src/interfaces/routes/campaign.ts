import multer from '@koa/multer'
import {
  createCampaign,
  getCampaignById,
  getCampaigns,
  getCover,
  updateCampaign,
  createResource,
  closeCampaign,
} from 'interfaces/controllers/campaign.controller'
import { createDistribution, generateDistribution, getDistribution, getDistributionBeneficiary } from 'interfaces/controllers/distribution.controller'
import Router from 'koa-router'

const upload = multer({ dest: 'tmp/csv' })
const campaignRouter = new Router()

campaignRouter
  .prefix('/user/campaign')

campaignRouter
  .get('/', getCampaigns, getCampaignById)
  .get('/cover/:id', getCover)
  .post('/', createCampaign)
  .post('/:id/beneficiary/:beneficiaryId', createDistribution )
  .post('/:id/distribution', generateDistribution )
  .get('/:id/distribution', getDistribution )
  .get('/:id/distribution/:beneficiaryId', getDistributionBeneficiary )
  .post('/:id/resources', upload.single('file'), createResource )
  .post('/:id/close', closeCampaign )
  .put('/:id', updateCampaign)

export {
  campaignRouter
}
