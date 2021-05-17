import { Context, Next } from 'koa'
import uniqid from 'uniqid'
import jwt from 'jsonwebtoken'
import {
  CreateGiver, GetById,
} from 'application/use_cases/giver/'

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

const getGiver = async (ctx: Context, next: Next): Promise<void> => {
  const giverId = ctx.params.id
  const campaignId = ctx.params.campaign
  const response = await GetById(giverId, campaignId, ctx)
  ctx.body = response
}

export {
  createGiver,
  getGiver
}
