import { addVolunteer, getByCampaign } from 'interfaces/controllers/volunteer.controller'
import Router from 'koa-router'

const volunteerRouter = new Router()

volunteerRouter.prefix('/volunteer')


volunteerRouter
  .get('/:id', getByCampaign)
  .post('/', addVolunteer)

export {
  volunteerRouter
}
