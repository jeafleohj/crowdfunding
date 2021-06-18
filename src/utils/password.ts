const passwordRegexValidate = (password: string): boolean =>  {
  const regex = /^[0-9a-zA-Z]{8,}$/
  return regex.test(password)
}
export { passwordRegexValidate }
