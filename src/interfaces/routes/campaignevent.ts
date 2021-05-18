import { createCampaignEvent, getByCampaign, removeEvent, updateEvent } from 'interfaces/controllers/campaignevent.controller'
import Router from 'koa-router'

const campaignEventRouter = new Router()

campaignEventRouter
  .prefix('/user/campaign')

campaignEventRouter
  .post('/:id/stage', createCampaignEvent)
  .get('/:id/stage', getByCampaign)
  .put('/stage', updateEvent)
  .put('/stage/remove', removeEvent)

export {
  campaignEventRouter
}
