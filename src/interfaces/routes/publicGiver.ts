import { getGiverCampaigns, getGiverResult } from 'interfaces/controllers/giver.controller'
import Router from 'koa-router'

const publicGiverRouter = new Router()

publicGiverRouter
  .prefix('/public/giver')

  publicGiverRouter
  .get('/:giverId/result/:campaignId', getGiverResult)
  .get('/:code/campaigns', getGiverCampaigns)

export {
  publicGiverRouter
}
