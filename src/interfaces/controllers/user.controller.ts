import { Context, Next} from 'koa'
import { CreateUser } from 'application/use_cases/CreateUser'
import { GetAll } from 'application/use_cases/GetAll'
import { ErrorHandler } from 'application/error'
import { User } from 'domain/entity/User'

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
  let user: Partial<User>|number = await CreateUser(ctx.request.body, ctx)
  if ( typeof user === 'number' ) {
    throw new ErrorHandler({
      status: 400,
      message: 'El email ya ha sido utilizado'
    })
  }
  delete user.password
  ctx.status = 200
  ctx.body = user
}

export {
  getUsers,
  createUser
}
