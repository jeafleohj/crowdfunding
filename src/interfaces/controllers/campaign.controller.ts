import { Context, Next } from 'koa'
import {
  CreateCampaign,
  GetAllCampaigns,
  ListBeneficiaries,
} from 'application/use_cases/campaign'

const getCampaigns = async (ctx: Context, next: Next) => {
  const user = ctx.state.user.id
  const campaigns = await GetAllCampaigns(user, ctx)
  ctx.body = {
    error: false,
    data: campaigns,
    status: 200,
    message: 'ok'
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

export {
  getCampaigns,
  createCampaign,
  listBeneficaries,
}
