import multer from 'multer'
import {Router} from 'express'
const router = new Router()

import fotoController from '../controllers/FotoController'
import multerConfig from '../config/multerConfig'

const upload = multer(multerConfig)

router.post('/', upload.single('foto'), fotoController.store)

export default router
