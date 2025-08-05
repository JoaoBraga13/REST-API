"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
const router = new (0, _express.Router)()

var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

//não deveria existir
//router.get('/', loginRequired, userController.index)  //lista usuários = falha de segurança
//router.get('/:id', userController.show) //lista usuário = falha de segurança, é possível usar de outras formas


router.post('/', _UserController2.default.store)
router.put('/', _loginRequired2.default, _UserController2.default.update)
router.delete('/', _loginRequired2.default, _UserController2.default.delete)

exports. default = router


