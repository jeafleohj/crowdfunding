import Router from 'koa-router'
import { addToken } from 'interfaces/controllers/tokenblacklisting.controller'

const logAuth = new Router()

logAuth.prefix('/user/logout')

logAuth
  .post('/', addToken)

export {
  logAuth
}
