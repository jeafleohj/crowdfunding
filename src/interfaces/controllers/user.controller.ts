import {Context, Next} from 'koa'

const getUsers = async (ctx: Context, next: Next) => {
  const users = await ctx.userRepository.get()
  ctx.body = {
    error: false,
    data: users,
    status: 200,
    message: 'ok'
  }
  next()
}

const createUser = async (ctx: Context, next: Next) => {
  const response = await ctx.userRepository.persist(ctx.request.body)
  ctx.body = {
    error: false,
    data: response,
    status: 200,
    message: 'ok'
  }
  next()
}

export {
  getUsers,
  createUser
}
