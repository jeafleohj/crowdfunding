import { addVolunteer, getByCampaign, getCampaigns, removeVolunteer } from 'interfaces/controllers/volunteer.controller'
import Router from 'koa-router'

const volunteerRouter = new Router()

volunteerRouter.prefix('/volunteer')


volunteerRouter
  .get('/campaign', getCampaigns)
  .get('/campaign/:id', getByCampaign)
  .post('/', addVolunteer)
  .put('/remove', removeVolunteer)

export {
  volunteerRouter
}
