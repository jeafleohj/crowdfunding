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
import { Campaign, Giver, Resource } from 'domain/entity'
import fs from 'fs'
import { CreateResource } from 'application/use_cases/resource/CreateResource'
import { campaignStatus } from 'domain/entity/Campaign'
import { ListGivers } from 'application/use_cases/giver'
import { forEachAsync } from 'utils/forAsync'
import aws from "aws-sdk"
import { ErrorHandler } from 'application/error'

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
    id: ctx.params.campaignId,
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
  const { campaignId } = ctx.params
  const filePath = ctx.file.path
  const fileName = ctx.file.originalname
  const fileType = ctx.file.mimetype
  let response = await uploadFile(fileName, filePath, fileType);
  let file = response as { key: string, url: string }
  const result = { name: file.key, location: file.url, campaign: campaignId } as Resource
  await CreateResource(result, ctx)

  fs.unlinkSync(filePath);

  ctx.status = 200
}

const uploadFile = async (fileName: string, filePath: string, fileType: string) => {
  return new Promise((resolve, reject) => {

    const s3 = new aws.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    });

    const fileContent = fs.readFileSync(filePath);

    s3.upload(
      {
        ACL: "public-read",
        Bucket: process.env.AWS_S3_NAME,
        Body: fileContent,
        Key: fileName,
        ContentType: fileType,
      },
      function (err: any, data: any) {
        if (err) {
          reject(err);
        } else if (data) {
          resolve({ key: data.Key, url: data.Location });
        }
      }
    )
  })
}

const getCampaignById = async (ctx: Context, next: Next) => {
  let campaignId = (ctx.request.query as any).id
  const campaign = await GetCampaignById(campaignId, ctx)
  ctx.body = campaign
  ctx.status = 200
}

const getCover = async (ctx: Context) => {
  const { campaignId } = ctx.params
  console.log(campaignId)
  const cover = await GetCover(campaignId, ctx)
  ctx.body = cover
  ctx.status = 200
}

const getDetails = async (ctx: Context) => {
  const { campaignId } = ctx.params
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
  const { campaignId }= ctx.params

  const campaign = await GetCampaignById(campaignId, ctx)
  const givers = await ListGivers(campaignId, ctx)
  const link = `${process.env.HOSTNAME}/giver`

  await forEachAsync(givers, async (el: Giver) => {
    const html = `Hola ${el.name}, la campaña <b>${campaign.name}</b> ha finalizado.<br>` +
      `Su código de donante es CODN${el.id} <br>` +
      `Ingrese su código en este <a href="${link}" target="_blank">enlace</a> para visualizar los resultados.`
    const mailInfo = {
      to: el.email,
      subject: `La campaña ${campaign.name} ha finalizado`,
      html
    }
    const sendMessage = await ctx.mailing(mailInfo)
    console.log(sendMessage)
  })

  const payload: Partial<Campaign> = {
    id: campaignId,
    status: campaignStatus.finalized,
  }
  const response = await CloseCampaign(payload, ctx)
  ctx.status = 200
}

const checkCampaignStatus = async (ctx :Context, next :Next) => {
  const {method} = ctx
  console.log('campañaa status before ->', ctx.params)
  if ( method === 'POST' || method === 'PUT') {
    const data = ctx.request.body
    console.log('campañaa status after ->', ctx.params)
    const campaignId = ctx.params.campaignId || data.campaign
    const campaign = await GetCampaignById(campaignId, ctx)
    if ( campaign.status === campaignStatus.finalized) {
      throw new ErrorHandler({
        status: 406,
        message: 'No se puede modificar una campaña finalizada',
      })
    }
  }
  await next()
}

export {
  checkCampaignStatus,
  closeCampaign,
  createCampaign,
  createResource,
  getCampaignById,
  getCampaigns,
  getCover,
  getDetails,
  getPublicCampaigns,
  listBeneficaries,
  updateCampaign,
}
