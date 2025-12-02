import { generateToken } from '../Utils/token-generator.js';

const default_user = {
  id: 1,
  email: "user@email.com",
  password: "strongPass123"
}

export async function login(req, res) {
  const { email, password } = req.body;

  if (email === default_user.email && password === default_user.password) {
    const user = { id: default_user.id, email }

    const token = generateToken(user)

    return res.status(200).json({
      message: "Login exitoso",
      token: `Bearer ${token}`
    })

  } else {
    return res.status(401).json({ message: 'Credenciales inválidas' })
  }
}
