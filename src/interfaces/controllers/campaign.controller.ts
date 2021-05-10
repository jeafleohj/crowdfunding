import { Context, Next } from 'koa'
import {
  CreateCampaign,
  GetAllCampaigns,
  ListBeneficiaries,
  ListDonations,
  GetCampaignById,
} from 'application/use_cases/campaign'
import { UpdateCampaign } from 'application/use_cases/campaign/UpdateCampaign'
import { Campaign } from 'domain/entity'

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
  //verify if beneficiary is empty
  const response =  await UpdateCampaign(payload, ctx)
  ctx.body = response
}

const listBeneficaries = async (ctx: Context, next: Next) => {
  let idCampaign = (ctx.request.query as any).idCampaign
  let beneficiary = await ListBeneficiaries(idCampaign, ctx)
  ctx.body = {
    error: false,
    data: beneficiary,
    status: 200,
    message: 'ok'
  }
  next()
}

const listDonations = async (ctx: Context, next: Next) => {
  let idCampaign = (ctx.request.query as any).idCampaign
  let donations = await ListDonations(idCampaign, ctx)
  ctx.body = donations
  ctx.status = 200
}

const getCampaignById = async (ctx: Context, next: Next) => {
  let idCampaign = (ctx.request.query as any).id
  const campaign = await GetCampaignById(idCampaign, ctx)
  ctx.body = campaign
  ctx.status = 200
}


export {
  createCampaign,
  getCampaignById,
  getCampaigns,
  listBeneficaries,
  listDonations,
  updateCampaign,
}
