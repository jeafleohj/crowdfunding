import { createDonation, listDonations, removeDonation, updateDonation } from 'interfaces/controllers/donation.controller'
import jwt from 'koa-jwt'
import Router from 'koa-router'

const donationRouter = new Router()

donationRouter.prefix('/donation')

donationRouter.use(jwt({
  secret: 'Key'
}))

donationRouter
  .post('/', createDonation)
  .get('/campaign/:id', listDonations)
  .put('/', updateDonation)
  .put('/remove', removeDonation)

export {
  donationRouter
}
