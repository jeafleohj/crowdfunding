import { Context, Next} from 'koa'
import { ErrorHandler } from 'application/error'
import { User } from 'domain/entity/User'
import { CreateUser, GetAll } from 'application/use_cases/user'
import { UpdateUser } from 'application/use_cases/user/UpdateUser'
import { ValidatePassword } from 'application/use_cases/user/ValidatePassword'
import bcrypt from 'bcryptjs'
import { passwordRegexValidate } from 'utils/password'

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

const updateUser = async (ctx: Context, next: Next) => {
  const userId = ctx.state.user.id
  const data = ctx.request.body
  const users = await UpdateUser(userId, data ,ctx)
  ctx.status = 200
}

const changePassword = async (ctx: Context) => {
  const userId = ctx.state.user.id
  const { password, newPassword, confirmPassword } = ctx.request.body
  const valid = await ValidatePassword(userId, password, ctx)

  if( !passwordRegexValidate(newPassword) ) {
    throw new ErrorHandler({
      status: 400,
      message: 'La contraseña debe tener mínimo 8 carácteres',
    })

  } else if ( newPassword !== confirmPassword ) {
    throw new ErrorHandler({
      status: 400,
      message: 'Las contraseñas no coinciden',
    })

  } else if ( valid ) {
    const passwordModel = bcrypt.hashSync(newPassword, bcrypt.genSaltSync())
    const users = await UpdateUser(userId, { password: passwordModel }, ctx)
    ctx.status = 200
  } else {
    throw new ErrorHandler({
      status: 400,
      message: 'La contraseña actual es incorrecta',
    })
  }
}

export {
  getUsers,
  createUser,
  updateUser,
  changePassword,
}
