import Router from 'koa-router'
import { addToken } from 'interfaces/controllers/tokenblacklisting.controller'

const authRouter = new Router()

authRouter.prefix('/auth')

authRouter
  .post('/', addToken)

export {
  authRouter
}
