const express = require('express');
const usercontroller = require('../controllers/user');
const { userSchema } = require('../schemas');
const { schemaHandler } = require('../middleware');

const router = express.Router();

router.post('/',
 schemaHandler(userSchema),
 usercontroller.postUser);

module.exports = router;