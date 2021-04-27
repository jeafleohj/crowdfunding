import Router from 'koa-router'
import { authRouter } from 'interfaces/routes/auth/login'
import { campaignRouter } from 'interfaces/routes/campaign'
import { ubigeoRouter } from 'interfaces/routes/ubigeo'
import { userRouter } from 'interfaces/routes/user'

const routes = [
  userRouter,
  authRouter,
  campaignRouter,
  ubigeoRouter,
]

const Routes = new Router()

Routes.use(...routes.map(r=>r.routes()))

export default Routes
