import { addDonations } from 'interfaces/controllers/donation.controller'
import { createGiver, getGiver, getGiverDonations, listGivers } from 'interfaces/controllers/giver.controller'
import Router from 'koa-router'

const giverRouter = new Router()

giverRouter.prefix('/giver')

giverRouter
  .post('/', createGiver)
  .post('/:giverId/donation', addDonations)
  .get('/:giverId/donation', getGiverDonations)
  .get('/:id/campaign/:campaign', getGiver)
  .get('/campaign/:campaign', listGivers)
  // .put('/', updateDonation)
  // .put('/remove', removeDonation)

export {
  giverRouter
}
