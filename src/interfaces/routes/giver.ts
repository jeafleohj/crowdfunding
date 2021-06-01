import { addDonations } from 'interfaces/controllers/donation.controller'
import { createGiver, getGiver, listGivers } from 'interfaces/controllers/giver.controller'
import Router from 'koa-router'

const giverRouter = new Router()

giverRouter.prefix('/giver')

giverRouter
  .post('/', createGiver)
  .post('/:giverId/donation/', addDonations)
  .get('/:id/campaign/:campaign', getGiver)
  .get('/campaign/:campaign', listGivers)
  // .put('/', updateDonation)
  // .put('/remove', removeDonation)

export {
  giverRouter
}
