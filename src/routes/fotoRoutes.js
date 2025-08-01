
import {Router} from 'express'
const router = new Router()

import fotoController from '../controllers/FotoController'
import loginRequired from '../middlewares/loginRequired'



router.post('/', loginRequired, fotoController.store)

export default router
