import Router from 'koa-router'
import { authRouter } from 'interfaces/routes/auth/login'
import { campaignRouter } from 'interfaces/routes/campaign'
import { ubigeoRouter } from 'interfaces/routes/ubigeo'
import { userRouter } from 'interfaces/routes/user'
import { beneficiaryRouter } from 'interfaces/routes/beneficiary'
import { donationRouter } from 'interfaces/routes/donation'
import { logAuth  } from 'interfaces/routes/auth/logout'
import jwt from 'koa-jwt'
import { validateToken } from 'interfaces/controllers/tokenblacklisting.controller'

const Routes = new Router()

const public_routes = [
  userRouter,
  authRouter,
]

Routes.use(...public_routes.map(r=>r.routes()))

const private_routes = [
  campaignRouter,
  ubigeoRouter,
  beneficiaryRouter,
  donationRouter,
  logAuth,
]

Routes
  .use(jwt({
    secret: 'Key'
  }))
  .use(validateToken)
  .use(...private_routes.map(r=>r.routes()))



export default Routes
