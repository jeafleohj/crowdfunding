async function GetUserByEmail (
  email: string,
  { userRepository }: MyRepository ): Promise<any>  {
  return userRepository.getByEmail(email)
}

export {
  GetUserByEmail
}
