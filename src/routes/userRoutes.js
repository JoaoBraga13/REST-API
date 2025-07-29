import {Router} from 'express'
const router = new Router()

import userController from '../controllers/UserController'
import loginRequired from '../middlewares/loginRequired'

//não deveria existir
//router.get('/', loginRequired, userController.index)  //lista usuários = falha de segurança
//router.get('/:id', userController.show) //lista usuário = falha de segurança, é possível usar de outras formas


router.post('/', userController.store)
router.put('/', loginRequired, userController.update)
router.delete('/', loginRequired, userController.delete)

export default router


