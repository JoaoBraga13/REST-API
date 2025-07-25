import User from '../models/User'
import jwt from 'jsonwebtoken'

class TokenController {
  async store(req,res) {
    const {email= '', password = ''} = req.body

    if(!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas'],
      })
    }

    const user = await User.findOne({where: {email: email} })

    if(!user) {
      return res.status(401).json({
        errors: ['usuário não registrado no banco'],
      })
    }

    if(!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['senha inválida']
      })
    }

    const {id} = user
    const token = jwt.sign({id, email}, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    })

    return res.json({token: token})
  }
}

export default new TokenController()
