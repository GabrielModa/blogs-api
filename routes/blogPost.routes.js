const express = require('express');
const { post, getPost } = require('../controllers/blogPosts');
const { schemaHandler, tokenValidate } = require('../middleware');
const postSchema = require('../schemas/blogPostSchema');

const router = express.Router();

router.post('/',
schemaHandler(postSchema), tokenValidate,
post);

router.get('/',
 tokenValidate,
getPost);

module.exports = router;