const express = require('express');
const { postLogin } = require('../controllers/login');
const { loginSchema } = require('../schemas');
const { schemaHandler/* , tokenValidate */ } = require('../middleware');

const router = express.Router();

router.post('/',
schemaHandler(loginSchema),
 postLogin);

module.exports = router;