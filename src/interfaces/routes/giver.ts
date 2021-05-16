import { createGiver } from 'interfaces/controllers/giver.controller'
import jwt from 'koa-jwt'
import Router from 'koa-router'

const giverRouter = new Router()

giverRouter.prefix('/giver')

giverRouter.use(jwt({
  secret: 'Key'
}))

giverRouter
  .post('/', createGiver)
  // .get('/', listDonations)
  // .put('/', updateDonation)
  // .put('/remove', removeDonation)

export {
  giverRouter
}
