import Router from 'koa-router'
import {userRouter} from 'interfaces/routes/user'
import {authRouter} from 'interfaces/routes/auth/login'
import {} from 'interfaces/routes/auth/login'

const routes = [
  userRouter,
  authRouter,
]

const Routes = new Router()

Routes.use(...routes.map(r=>r.routes()))

export default Routes
