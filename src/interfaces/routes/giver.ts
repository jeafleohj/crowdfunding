import { addDonations } from 'interfaces/controllers/donation.controller'
import { collectGiverDonations, createGiver, getGiver, getGiverCampaigns, getGiverDonations, getGiverResult, listGivers } from 'interfaces/controllers/giver.controller'
import Router from 'koa-router'

const giverRouter = new Router()

giverRouter.prefix('/giver')

giverRouter
  .post('/', createGiver)
  .post('/:giverId/donation', addDonations)
  .get('/:giverId/donation', getGiverDonations)
  .get('/:id/campaign/:campaign', getGiver)
  .get('/campaign/:campaign', listGivers)
  .put('/:giverId/donation', collectGiverDonations)
  .get('/:giverId/result/:campaignId', getGiverResult)
  .get('/:code/campaigns', getGiverCampaigns)
  // .put('/remove', removeDonation)

export {
  giverRouter
}
