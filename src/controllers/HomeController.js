import Aluno from '../models/Aluno'

class HomeController {
  async index(req,res) {
    const novoAluno = await Aluno.create({
      nome: 'Jao',
      sobrenome: 'braga',
      email: 'joao@gmail.com',
      idade: 112,
      peso: 300,
      altura: 1.81
    })
    res.json(novoAluno)
  }
}

export default new HomeController()
