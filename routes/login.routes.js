const express = require('express');
const { postLogin } = require('../controllers/user');

const router = express.Router();

router.post('/', postLogin);

module.exports = router;