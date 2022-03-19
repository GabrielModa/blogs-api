const Joi = require('joi');

const categorySchema = Joi.object({
  
   name: Joi.string()
  .required().messages({
    'any.required': '400|"name" is required',
    
   }),
   
   image: Joi.string(),
});

module.exports = categorySchema;