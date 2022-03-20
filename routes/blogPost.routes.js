const express = require('express');
const { post } = require('../controllers/blogPosts');
const { schemaHandler, tokenValidate } = require('../middleware');
const postSchema = require('../schemas/blogPostSchema');

const router = express.Router();

router.post('/',
schemaHandler(postSchema), tokenValidate,
post);

module.exports = router;