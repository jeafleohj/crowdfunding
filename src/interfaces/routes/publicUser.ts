import Router from 'koa-router'
import { createUser, getUsers, updateUser, changePassword } from 'interfaces/controllers/user.controller'
import multer from '@koa/multer'
import { Context } from 'koa'

const publicUserRouter = new Router()

publicUserRouter.prefix('/register')

publicUserRouter
  .post('/', createUser)

export {
  publicUserRouter
}
