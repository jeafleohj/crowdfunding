import { Context, Next } from 'koa'
import {
  CreateCampaign,
  GetAllCampaigns,
  ListBeneficiaries,
  GetCampaignById,
  GetCover,
  GetDetails,
  GetPublicCampaigns,
  CloseCampaign,

} from 'application/use_cases/campaign'
import { UpdateCampaign } from 'application/use_cases/campaign/UpdateCampaign'
import { Beneficiary, Campaign, Giver, Resource } from 'domain/entity'
import fs from 'fs'
import { CreateResource } from 'application/use_cases/resource/CreateResource'
import { campaignStatus } from 'domain/entity/Campaign'
import { ListGivers } from 'application/use_cases/giver'
import { forEachAsync } from 'utils/forAsync'
const aws = require("aws-sdk");

const getCampaigns = async (ctx: Context, next: Next) => {
  const query = ctx.request.query
  const obj = JSON.stringify(query);
  if (obj === '{}') {
    const user = ctx.state.user.id
    const campaigns = await GetAllCampaigns(user, ctx)
    ctx.body = {
      error: false,
      data: campaigns,
      status: 200,
      message: 'ok'
    }
  } else {
    await next()
  }
}

const createCampaign = async (ctx: Context, next: Next) => {
  const user = ctx.state.user.id
  let data = ctx.request.body
  data.user = user
  const response = await CreateCampaign(data, ctx)
  ctx.body = {
    error: false,
    data: response,
    status: 200,
    message: 'ok'
  }
  next()
}

const updateCampaign = async (ctx: Context, next: Next) => {
  const payload: Partial<Campaign> = {
    id: ctx.params.id,
    image_url: ctx.request.body.image_url,
    description: ctx.request.body.description,
  }
  const response = await UpdateCampaign(payload, ctx)
  ctx.body = response
}

const listBeneficaries = async (ctx: Context) => {
  let campaignId = (ctx.request.query as any).idCampaign
  let campaignBeneficiary = await ListBeneficiaries(campaignId, ctx)
  let beneficiary = campaignBeneficiary.map((cb: any) => {
    delete cb.beneficiary.createdAt
    delete cb.beneficiary.updateAt
    return cb.beneficiary
  })

  ctx.body = {
    error: false,
    data: beneficiary,
    status: 200,
    message: 'ok'
  }
}

const createResource = async (ctx: Context) => {
  const campaignId = ctx.params.id
  const filePath = ctx.file.path
  const fileName = ctx.file.originalname
  let result = null

  const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  });

  const fileContent = fs.readFileSync(filePath);

  s3.upload(
    {
      // You'll input your bucket name here
      Bucket: process.env.AWS_S3_NAME,
      Body: fileContent,
      Key: fileName,
    },
    async function (err: any, data: any) {
      if (err) {
        result = err
      } else if (data) {
        result = { name: data.Key, location: data.Location, campaign: campaignId } as Resource
        const resource = await CreateResource(result, ctx)
      }
    }
  )

  fs.unlinkSync(filePath);
  ctx.data = result
  ctx.status = 200
}

const getCampaignById = async (ctx: Context, next: Next) => {
  let campaignId = (ctx.request.query as any).id
  const campaign = await GetCampaignById(campaignId, ctx)
  ctx.body = campaign
  ctx.status = 200
}

const getCover = async (ctx: Context) => {
  const campaignId = ctx.params.id
  const cover = await GetCover(campaignId, ctx)
  ctx.body = cover
  ctx.status = 200
}

const getDetails = async (ctx: Context) => {
  const campaignId = ctx.params.id
  const cover = await GetDetails(campaignId, ctx)
  ctx.body = cover
  ctx.status = 200
}

const getPublicCampaigns = async (ctx: Context) => {
  const campaigns = await GetPublicCampaigns(ctx)
  ctx.body = campaigns
  ctx.status = 200
}

const closeCampaign = async (ctx: Context) => {
  const campaignId = ctx.params.id

  const campaign = await GetCampaignById(campaignId, ctx)
  const givers = await ListGivers(campaignId, ctx)
  const link = `${process.env.HOSTNAME}/giver/consultar`

  await forEachAsync(givers, async (el: Giver) => {
    const html = `Hola ${el.name}, la campaña <b>${campaign.name}</b> ha finalizado.<br>` +
      `Ingrese a este <a href="${link}" target="_blank">link</a> para visualizar los resultados.`

    const mailInfo = {
      to: el.email,
      subject: `La campaña ${campaign.name} ha finalizado`,
      html
    }
    const sendMessage = await ctx.mailing(mailInfo)
  })

  const payload: Partial<Campaign> = {
    id: campaignId,
    status: campaignStatus.finalized,
  }
  const response = await CloseCampaign(payload, ctx)
  ctx.status = 200
}

export {
  createCampaign,
  getCampaignById,
  getCampaigns,
  listBeneficaries,
  updateCampaign,
  getDetails,
  getCover,
  getPublicCampaigns,
  createResource,
  closeCampaign,
}
