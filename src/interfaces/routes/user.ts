import Router from 'koa-router'
import {
  getUsers,
  updateUser,
  changePassword,
  userSuggestions,
} from 'interfaces/controllers/user.controller'

const userRouter = new Router()

userRouter.prefix('/user')

userRouter
  .get('/', getUsers)
  .put('/', updateUser)
  .put('/password', changePassword)
  .get('/suggest', userSuggestions)

export {
  userRouter
}
