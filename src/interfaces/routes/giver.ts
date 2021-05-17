import { createGiver } from 'interfaces/controllers/giver.controller'
import Router from 'koa-router'

const giverRouter = new Router()

giverRouter.prefix('/giver')

giverRouter
  .post('/', createGiver)
  // .get('/', listDonations)
  // .put('/', updateDonation)
  // .put('/remove', removeDonation)

export {
  giverRouter
}
