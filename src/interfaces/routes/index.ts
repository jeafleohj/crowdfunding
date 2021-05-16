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
import jwt from 'koa-jwt'
import { validateToken } from 'interfaces/controllers/tokenblacklisting.controller'
import { giverRouter } from './giver'

const Routes = new Router()

const public_routes = [
  userRouter,
  authRouter,
]

Routes.use(...public_routes.map(r=>r.routes()))

const private_routes = [
  beneficiaryRouter,
  campaignRouter,
  campaignEventRouter,
  donationRouter,
  logAuth,
  ubigeoRouter,
  volunteerRouter,
  giverRouter
]

Routes
  .use(jwt({
    secret: 'Key'
  }))
  .use(validateToken)
  .use(...private_routes.map(r=>r.routes()))

export default Routes
