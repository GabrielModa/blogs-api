const express = require('express');
const { postCategory } = require('../controllers/categories');
const { schemaHandler, tokenValidate } = require('../middleware');
const categoriesSchema = require('../schemas/categoriesSchema');

const router = express.Router();

router.post('/', schemaHandler(categoriesSchema), 
tokenValidate, postCategory);

module.exports = router;