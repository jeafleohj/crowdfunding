import Router from 'koa-router'
import { createUser, getUsers, updateUser, changePassword } from 'interfaces/controllers/user.controller'
import multer from '@koa/multer'
import { Context } from 'koa'

const upload = multer()
const userRouter = new Router()

userRouter.prefix('/user')

userRouter
  .get('/', getUsers)
  .put('/', updateUser)
  .put('/password', changePassword)

export {
  userRouter
}
