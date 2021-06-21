import { Context, Next} from 'koa'
import { ErrorHandler } from 'application/error'
import { User } from 'domain/entity/User'
import { CreateUser, GetAll } from 'application/use_cases/user'
import { UpdateUser } from 'application/use_cases/user/UpdateUser'
import { ValidatePassword } from 'application/use_cases/user/ValidatePassword'
import bcrypt from 'bcryptjs'
import { passwordRegexValidate } from 'utils/password'
import { generateToken } from 'utils/generateToken'
import { FindByQuery } from 'application/use_cases/user/FindbyQuery'

const getUsers = async (ctx: Context) => {
  const users = await GetAll(ctx)
  ctx.body = users
  ctx.status = 200
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

  const token = await generateToken({
    id: user.id,
    email: user.email
  })

  ctx.body = token
  ctx.status = 200
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

async function userSuggestions(ctx :Context) {
  const word = ctx.query.search as string
  let keys = ['name','lastname','email']

  let projection = keys.map( current => {
    return `user.${current}`
  })

  let where = projection.reduce((acc, current) => {
    return `${acc},' ',${current} `
  })

  projection.push('user.id')

  let users = await FindByQuery(projection, where, word ,ctx)

  ctx.status = 200
  ctx.body = users

}

export {
  changePassword,
  createUser,
  getUsers,
  updateUser,
  userSuggestions,
}
