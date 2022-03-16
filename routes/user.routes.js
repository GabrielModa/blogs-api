const express = require('express');
const usercontroller = require('../controllers/user');

const router = express.Router();

router.post('/', usercontroller.postUser);

module.exports = router;