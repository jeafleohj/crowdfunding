import Router from 'koa-router'
import { createUser, getUsers } from 'interfaces/controllers/user.controller'
import multer from '@koa/multer'
import { Context } from 'koa'

const upload = multer()
const userRouter = new Router()

userRouter.prefix('/user')

userRouter
  .get('/', getUsers)
  .post('/', createUser)
  .post('/test', upload.single('csv'), async (ctx: Context) => {
    console.log(ctx.file.buffer.toString('utf-8'))
    ctx.status = 200
  })

export {
  userRouter
}
