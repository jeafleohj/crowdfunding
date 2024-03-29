import { addDonations } from 'interfaces/controllers/donation.controller'
import { addGiver, collectGiverDonations, createGiver, getGiver, getGiverDonations, listGivers } from 'interfaces/controllers/giver.controller'
import Router from 'koa-router'

const giverRouter = new Router()

giverRouter.prefix('/giver')

giverRouter
  .post('/', createGiver)
  .post('/:giverId/donation', addDonations)
  .post('/campaign/:campaignId', addGiver)
  .get('/:giverId/donation', getGiverDonations)
  .get('/:id/campaign/:campaign', getGiver)
  .get('/campaign/:campaign', listGivers)
  .put('/:giverId/donation', collectGiverDonations)
  // .put('/remove', removeDonation)

export {
  giverRouter
}
