import Router from 'koa-router'
import { userRouter } from 'interfaces/routes/user'
import { authRouter } from 'interfaces/routes/auth/login'
import { ubigeoRouter } from 'interfaces/routes/ubigeo'

const routes = [
  userRouter,
  authRouter,
  ubigeoRouter
]

const Routes = new Router()

Routes.use(...routes.map(r=>r.routes()))

export default Routes
