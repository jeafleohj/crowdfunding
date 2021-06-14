import { Context, Next } from 'koa'
import uniqid from 'uniqid'
import jwt from 'jsonwebtoken'
import * as UGiver from 'application/use_cases/giver'
import {
  CreateGiver, GetById, ListGivers, GetGiverDonations, GetGiverCampaigns
} from 'application/use_cases/giver/'
import { giverStatus } from 'domain/entity/Giver'
import { CollectDonations } from 'application/use_cases/giverDonation'
import { GiverDonation } from 'domain/entity'
import { GetResults } from 'application/use_cases/campaign'
import { GetEventById } from 'application/use_cases/campaignevent/GetEventById'
import { ErrorHandler } from 'application/error'

async function generateUrl(payload: any): Promise<string> {
  const jid = uniqid()
  const token = jwt.sign(
    payload,
    process.env.JWT_KEY as string,
    {
      expiresIn: '1 hour',
      jwtid: jid
    }
  )
  return `${process.env.HOSTNAME}/giver/${token}`
}

const createGiver = async (ctx: Context, next: Next): Promise<void> => {
  const data = ctx.request.body
  const email = data.email as string
  const {giverId, campaign} = await CreateGiver(data, ctx)
  let link = await generateUrl({
    giverId,
    campaignId: campaign.id
  })
  const html = `Hola ${data.name}, se ha registrado como donante para la campaña <b>${campaign.name}</b><br>`+
    `Ingrese a este <a href="${link}" target="_blank">link</a> para continuar con el registro.`

  const mailInfo = {
    to: email,
    subject: `Se ha registrado como donante en ${campaign.name}`,
    html
  }
  const sendMessage = await ctx.mailing(mailInfo)
  console.log(sendMessage)
  ctx.status = 200
}

const getGiver = async (ctx: Context): Promise<void> => {
  const giverId = ctx.params.id
  const campaignId = ctx.params.campaign
  const response = await GetById(giverId, campaignId, ctx)
  ctx.body = response
}

const getGiverResult = async (ctx: Context): Promise<void> => {
  const giverId = ctx.params.giverId
  const campaignId = ctx.params.campaignId
  const giver = await GetGiverDonations(giverId, ctx)
  const event = await GetEventById(giver.eventId, ctx)
  const result = await GetResults(campaignId, ctx)
  ctx.body = {
    ...giver, result, event
  }
}

const getGiverCampaigns = async (ctx: Context): Promise<void> => {
  const code = ctx.params.code
  const giverId = code.replace('CODN', '')
  const giver = await GetGiverDonations(giverId, ctx)
  if (giver === undefined) {
    throw new ErrorHandler({
      status: 400,
      message: 'El código no existe',
    })
  } else {
    const response = await GetGiverCampaigns(giver.email, ctx)
    ctx.body = response
  }
}

const listGivers = async (ctx: Context, next: Next): Promise<void> => {
  const campaignId = ctx.params.campaign
  const response = await ListGivers(campaignId, ctx)
  ctx.body = response
}

const getGiverDonations = async (ctx: Context, next: Next): Promise<void> => {
  const giverId = ctx.params.giverId
  const response = await GetGiverDonations(giverId, ctx)
  ctx.body = response
}

const collectGiverDonations = async (ctx: Context): Promise<void> => {
  const giverId = ctx.params.giverId
  const donations = ctx.request.body as Array<GiverDonation>
  const response = await CollectDonations(donations, ctx)

  await UGiver.UpdateGiver(giverId, {
    status: giverStatus.complete},
    ctx)

  ctx.status = 200
}

export {
  createGiver,
  getGiver,
  listGivers,
  getGiverDonations,
  collectGiverDonations,
  getGiverResult,
  getGiverCampaigns,
}
