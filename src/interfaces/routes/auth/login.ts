import Router from 'koa-router'
import {login, loginGoogle} from 'interfaces/controllers/auth.controller'

const authRouter = new Router()

authRouter.prefix('/auth')

authRouter
  .post('/', login)
  .post('/google', loginGoogle)

export {
  authRouter
}
