const express = require('express');
const { postUser, getUsers, getUsersById } = require('../controllers/user');

const { userSchema } = require('../schemas');
const { schemaHandler, tokenValidate } = require('../middleware');

const router = express.Router();

router.post('/', schemaHandler(userSchema), postUser);
router.get('/', tokenValidate, getUsers);
router.get('/:id', tokenValidate, getUsersById);

module.exports = router;