import { Context, Next } from 'koa'
import {
  CreateCampaign,
  GetAllCampaigns,
  ListBeneficiaries,
  GetCampaignById,
  GetCover,
  GetDetails,
  GetPublicCampaigns,

} from 'application/use_cases/campaign'
import { UpdateCampaign } from 'application/use_cases/campaign/UpdateCampaign'
import { Beneficiary, Campaign } from 'domain/entity'
import fs from 'fs'

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
  const response =  await UpdateCampaign(payload, ctx)
  ctx.body = response
}

const listBeneficaries = async (ctx: Context) => {
  let campaignId = (ctx.request.query as any).idCampaign
  let campaignBeneficiary = await ListBeneficiaries(campaignId, ctx)
  let beneficiary = campaignBeneficiary.map( (cb: any) => {
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
  const file = ctx.file
  console.log(file)
  fs.unlinkSync(file.path);
  ctx.status = 200
}

const getCampaignById = async (ctx: Context, next: Next) => {
  let campaignId = (ctx.request.query as any).id
  const campaign = await GetCampaignById(campaignId, ctx)
  ctx.body = campaign
  ctx.status = 200
}

const getCover = async(ctx: Context) => {
  const campaignId = ctx.params.id
  const cover = await GetCover(campaignId, ctx)
  ctx.body = cover
  ctx.status = 200
}

const getDetails = async(ctx: Context) => {
  const campaignId = ctx.params.id
  const cover = await GetDetails(campaignId, ctx)
  ctx.body = cover
  ctx.status = 200
}

const getPublicCampaigns = async(ctx: Context) => {
  const campaigns = await GetPublicCampaigns(ctx)
  ctx.body = campaigns
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
}
