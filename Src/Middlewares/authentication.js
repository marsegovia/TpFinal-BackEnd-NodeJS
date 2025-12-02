import jwt from 'jsonwebtoken'
import 'dotenv/config'

const secret_key = process.env.JWT_SECRET_KEY

export const authentication = (req, res, next) => {

  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" })
  }

  const token = authHeader.split(" ")[1]

  if (!token) {
    return res.status(401).json({ message: "Invalid token format" })
  }

  jwt.verify(token, secret_key, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" })

    req.user = decoded
    next()
  })
}
