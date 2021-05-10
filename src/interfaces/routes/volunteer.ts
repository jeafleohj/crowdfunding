import { addVolunteer, getByCampaign, getCampaigns } from 'interfaces/controllers/volunteer.controller'
import Router from 'koa-router'

const volunteerRouter = new Router()

volunteerRouter.prefix('/volunteer')


volunteerRouter
  .get('/campaign', getCampaigns)
  .get('/campaign/:id', getByCampaign)
  .post('/', addVolunteer)

export {
  volunteerRouter
}
