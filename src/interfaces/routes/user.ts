import Router from 'koa-router'
import {createUser,getUsers} from 'interfaces/controllers/user.controller'

const userRouter = new Router()

userRouter.prefix('/user')

userRouter
  .get('/', getUsers)
  .post('/', createUser)

export {
  userRouter
}
