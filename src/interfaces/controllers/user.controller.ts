import {getRepository} from 'typeorm'
import {Context, Next} from 'koa'
import {User} from 'domain/User'

const getUsers = async (ctx: Context, next: Next) => {
  const users = await getRepository(User).find()
  ctx.body = users
  await next()
}

const createUser = async (ctx: Context, next: Next) => {
  const user = getRepository(User)
  const newuser = user.create(ctx.request.body)
  const users = user.save(newuser)
  ctx.body = {
    error: false,
    status: 200,
    data: users,
    message: 'ok'
  }
  await next()
}

module.exports = {
  getUsers,
  createUser
}
