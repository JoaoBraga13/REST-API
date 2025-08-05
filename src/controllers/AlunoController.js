import Aluno from '../models/Aluno'
import Foto from '../models/Foto'

class AlunoController {
  //index
  async index(req,res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['filename'],
      },
    })

    res.json(alunos)
  }

  //store
  async store(req,res) {
    try{
      const aluno = await Aluno.create(req.body)

      return res.json(aluno)

    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

  //update
  async update(req,res) {
    try{
      const {id} = req.params

      if(!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        })
      }

      const aluno = await Aluno.findByPk(id)

      if(!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe na base de dados'],
        })
      }

      const alunoAtualizado = await aluno.update(req.body)

      return res.json(alunoAtualizado)

    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

  //show
  async show(req,res) {
    try{
      const {id} = req.params

      if(!id) {
        return res.status(400).json({
          errors: ['missing ID'],
        })
      }

      const aluno = await Aluno.findByPk(id, {
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['filename'],
      },
    })

      if(!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe na base de dados'],
        })
      }

      return res.json(aluno)

    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

  //delete
  async delete(req,res) {
    try{
      const {id} = req.params

      if(!id) {
        return res.status(400).json({
          errors: ['missing ID']
        })
      }

      const aluno = await Aluno.findByPk(id)

      if(!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe na base de dados'],
        })
      }

      await aluno.destroy()

      return res.json({
        aluno: aluno,
        apagado: true,
      })

    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

}



export default new AlunoController()
