import Router from 'koa-router'
import { authRouter } from 'interfaces/routes/auth/login'
import { beneficiaryRouter } from 'interfaces/routes/beneficiary'
import { campaignRouter } from 'interfaces/routes/campaign'
import { campaignEventRouter } from 'interfaces/routes/campaignevent'
import { donationRouter } from 'interfaces/routes/donation'
import { logAuth  } from 'interfaces/routes/auth/logout'
import { ubigeoRouter } from 'interfaces/routes/ubigeo'
import { userRouter } from 'interfaces/routes/user'
import { volunteerRouter } from 'interfaces/routes/volunteer'
import { publicCampaignRouter } from 'interfaces/routes/publicCampaign'
import { validateToken } from 'interfaces/controllers/tokenblacklisting.controller'
import { giverRouter } from './giver'
import { resourceRouter } from './resource'
import jwt from 'koa-jwt'

const Routes = new Router()

const public_routes = [
  authRouter,
  giverRouter,
  userRouter,
  publicCampaignRouter,
]

Routes.use(...public_routes.map(r=>r.routes()))

const private_routes = [
  beneficiaryRouter,
  campaignRouter,
  campaignEventRouter,
  donationRouter,
  resourceRouter,
  logAuth,
  ubigeoRouter,
  volunteerRouter,
]

Routes
  .use(jwt({
    secret: process.env.JWT_KEY as string
  }))
  .use(validateToken)
  .use(...private_routes.map(r=>r.routes()))

export default Routes
