const express = require('express');
const userController = require('../controllers/user');
const { userSchema } = require('../schemas');
const { schemaHandler, tokenValidate } = require('../middleware');

const router = express.Router();

router.post('/', schemaHandler(userSchema), userController.postUser);
router.get('/', tokenValidate, userController.getUsers);
router.get('/:id', tokenValidate, userController.getUsersById);

module.exports = router;