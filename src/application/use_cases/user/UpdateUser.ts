import { User } from "domain/entity"

async function UpdateUser (
  id: number,
  data: Partial<User>,
  { userRepository }: MyRepository ): Promise<any>  {
  return userRepository.updateUser(id, data)
}

export {
  UpdateUser
}
