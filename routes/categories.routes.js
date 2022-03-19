const express = require('express');
const { postCategory, getCategories } = require('../controllers/categories');
const { schemaHandler, tokenValidate } = require('../middleware');
const categoriesSchema = require('../schemas/categoriesSchema');

const router = express.Router();

router.post('/', schemaHandler(categoriesSchema), 
tokenValidate, postCategory);

router.get('/', tokenValidate, getCategories);

module.exports = router;