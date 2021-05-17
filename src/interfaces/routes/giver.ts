import { createGiver, getGiver } from 'interfaces/controllers/giver.controller'
import Router from 'koa-router'

const giverRouter = new Router()

giverRouter.prefix('/giver')

giverRouter
  .post('/', createGiver)
  .get('/:id/campaign/:campaign', getGiver)
  // .put('/', updateDonation)
  // .put('/remove', removeDonation)

export {
  giverRouter
}
