import {Context, Next} from 'koa'
import {CreateUser} from 'application/use_cases/CreateUser'
import {GetAll} from 'application/use_cases/GetAll'

const getUsers = async (ctx: Context, next: Next) => {
  const users = await GetAll(ctx)
  ctx.body = {
    error: false,
    data: users,
    status: 200,
    message: 'ok'
  }
}

const createUser = async (ctx: Context, next: Next) => {
  const response = await CreateUser(ctx.request.body, ctx)
  ctx.body = {
    error: false,
    data: response,
    status: 200,
    message: 'ok'
  }
}

export {
  getUsers,
  createUser
}
