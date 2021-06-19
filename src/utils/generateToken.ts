import jwt from 'jsonwebtoken'
import uniqid from 'uniqid'

export async function generateToken(payload: any): Promise<string> {
  const jid = uniqid()
  const token = jwt.sign(
    payload,
    process.env.JWT_KEY,
    {
      expiresIn: process.env.JWT_EXPIRE,
      jwtid: jid
    }
  )
  return token
}
