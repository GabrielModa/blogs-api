const Joi = require('joi');

const postSchema = Joi.object({

   title: Joi.string()
  .required().messages({
    'any.required': '400|"title" is required',
    'string.empty': '400|"title" is not allowed to be empty',
   }),

   content: Joi.string()
   .required().messages({
     'any.required': '400|"content" is required',
     'string.empty': '400|"content" is not allowed to be empty',
    }),

    categoryIds: Joi.array()
   .required().messages({
     'any.required': '400|"categoryIds" is required',
     'string.empty': '400|"categoryIds" is not allowed to be empty',
    }),
});

module.exports = postSchema; 