const Joi = require('joi');

const userSchema = Joi.object({
  
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } })
  .required().messages({
    'any.required': '400|"email" is required',
    'string.empty': '400|"email" is not allowed to be empty',
  }),

  password: Joi.string().min(6)
  .required().messages({
    'any.required': '400|"password" is required',
    'string.empty': '400|"password" is not allowed to be empty',
   }),
   
   image: Joi.string(),
});

module.exports = userSchema;