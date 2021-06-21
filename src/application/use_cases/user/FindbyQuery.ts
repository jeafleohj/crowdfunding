async function FindByQuery(
  projection: Array<string>,
  where: string,
  pattern: string,
  { userRepository }: MyRepository ): Promise<any>  {
  return userRepository.getByQuery(projection, where, pattern)
}

export {
  FindByQuery
}
