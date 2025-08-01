
import {Router} from 'express'
const router = new Router()

import fotoController from '../controllers/FotoController'




router.post('/', fotoController.store)

export default router
