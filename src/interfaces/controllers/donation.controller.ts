import { CreateEvent } from 'application/use_cases/campaignevent'
import {
  CreateDonation,
  RemoveDonation,
  UpdateDonation,
  ListDonations
} from 'application/use_cases/donation/'
import { CampaignEvent, Giver, GiverDonation } from 'domain/entity'
import { CampaignEventType } from 'domain/entity/CampaignEvent'
import { Context, Next } from 'koa'
import * as UGiver from 'application/use_cases/giver'
import { AddDonations } from 'application/use_cases/giverDonation'
import { giverStatus } from 'domain/entity/Giver'


const createDonation = async (ctx: Context, next: Next): Promise<void> => {
  let data = ctx.request.body
  const response = await CreateDonation(data, ctx)
  ctx.body = response
  ctx.status = 200
}

const listDonations = async (ctx: Context, next: Next): Promise<void> => {
  const campaignId = ctx.params.id
  const response = await ListDonations(campaignId, ctx)
  ctx.body = response
  ctx.status = 200
}

const updateDonation = async (ctx: Context, next: Next): Promise<void> => {
  let data = ctx.request.body
  const response = await UpdateDonation(data, ctx)
  ctx.body = response
  ctx.status = 200
  next()
}

const removeDonation = async (ctx: Context, next: Next): Promise<void> => {
  let data = ctx.request.body
  const response = await RemoveDonation(data, ctx)
  ctx.body = response
  ctx.status = 200
}

const addDonations = async (ctx: Context, next: Next) => {
  const giverId = ctx.params.giverId as number
  const data = ctx.request.body as {
    campaignId: number,
    donations: Array<GiverDonation & {donationId?: number}>,
    event: CampaignEvent,
    pickup: boolean,
  }

  let { campaignId, donations, event, pickup }  = data

  donations.map( donation => {
    donation.giver = giverId
    donation.donation = donation.donationId || 0
    delete donation.donationId
    return donation
  })

  if ( !event.id && pickup ) {
    const giver = await UGiver.GetById(giverId, campaignId, ctx) as Giver
    event.name = `${giver.name} ${giver.lastname} `
    event.campaign = campaignId
    event.endingDate = new Date(event.startDate)
    event.startDate = new Date(event.startDate)
    event.stage = CampaignEventType.pickup
    const newEvent = new CampaignEvent(event)
    const responseEvent = await CreateEvent(newEvent, ctx)
    event.id = responseEvent.id
  }

  const response = await AddDonations(donations, ctx)

  await UGiver.UpdateGiver(giverId, {
    status: giverStatus.pending
  }, ctx)

  ctx.status = 200
}


export {
  addDonations,
  createDonation,
  listDonations,
  removeDonation,
  updateDonation,
}
