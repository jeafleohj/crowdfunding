import Router from 'koa-router'
import {login} from 'interfaces/controllers/auth.controller'

const authRouter = new Router()

authRouter.prefix('/auth')

authRouter
  .post('/', login)

export {
  authRouter
}
