const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8)
   .required()
    .messages({
     'string.min': '400|"displayName" length must be at least 8 characters long',
    }), 

  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } })
  .required().messages({
    'string.email': '400|"email" must be a valid email',
    'any.required': '400|"email" is required',
  }),

  password: Joi.string().min(6)
  .required().messages({
    'string.min': '400|"password" length must be 6 characters long',
    'any.required': '400|"password" is required',
   }),
   
   image: Joi.string(),
});

module.exports = userSchema;