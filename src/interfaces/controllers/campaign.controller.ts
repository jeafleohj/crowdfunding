import {Context, Next} from 'koa'
import { CreateCampaign } from 'application/use_cases/campaign/CreateCampaign'
import { GetAllCampaigns } from 'application/use_cases/campaign/GetAllCampaigns'

const getCampaigns = async (ctx: Context, next: Next) => {
  const campaigns = await GetAllCampaigns(ctx)
  ctx.body = {
    error: false,
    data: campaigns,
    status: 200,
    message: 'ok'
  }
  next()
}

const createCampaign = async (ctx: Context, next: Next) => {
  const user = ctx.state.user.id
  let data = ctx.request.body
  data.user = user
  const response = await CreateCampaign(data , ctx)
  ctx.body = {
    error: false,
    data: response,
    status: 200,
    message: 'ok'
  }
  next()
}

export {
  getCampaigns,
  createCampaign
}
