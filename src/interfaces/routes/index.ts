import Router from 'koa-router'
import { authRouter } from 'interfaces/routes/auth/login'
import { beneficiaryRouter } from 'interfaces/routes/beneficiary'
import { campaignRouter } from 'interfaces/routes/campaign'
import { campaignStageRouter } from 'interfaces/routes/campaignstage'
import { donationRouter } from 'interfaces/routes/donation'
import { logAuth  } from 'interfaces/routes/auth/logout'
import { ubigeoRouter } from 'interfaces/routes/ubigeo'
import { userRouter } from 'interfaces/routes/user'
import { volunteerRouter } from 'interfaces/routes/volunteer'
import jwt from 'koa-jwt'
import { validateToken } from 'interfaces/controllers/tokenblacklisting.controller'

const Routes = new Router()

const public_routes = [
  userRouter,
  authRouter,
]

Routes.use(...public_routes.map(r=>r.routes()))

const private_routes = [
  beneficiaryRouter,
  campaignRouter,
  campaignStageRouter,
  donationRouter,
  logAuth,
  ubigeoRouter,
  volunteerRouter,
]

Routes
  .use(jwt({
    secret: 'Key'
  }))
  .use(validateToken)
  .use(...private_routes.map(r=>r.routes()))



export default Routes
