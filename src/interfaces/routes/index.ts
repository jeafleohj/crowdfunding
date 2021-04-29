import Router from 'koa-router'
import { authRouter } from 'interfaces/routes/auth/login'
import { campaignRouter } from 'interfaces/routes/campaign'
import { ubigeoRouter } from 'interfaces/routes/ubigeo'
import { userRouter } from 'interfaces/routes/user'
import { beneficiaryRouter } from 'interfaces/routes/beneficiary'
import { donationRouter } from 'interfaces/routes/donation'

const routes = [
  userRouter,
  authRouter,
  campaignRouter,
  ubigeoRouter,
  beneficiaryRouter,
  donationRouter
]

const Routes = new Router()

Routes.use(...routes.map(r=>r.routes()))

export default Routes
