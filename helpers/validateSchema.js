const Joi = require("joi");

const validSchema = Joi.object({
  name: Joi.string().required(),
  type: Joi.string().required(),
  number: Joi.string().required(),
  contact: Joi.string().required(),
  price: Joi.string().required(),
  location: Joi.string().required(),
  description: Joi.string(),
  status: Joi.string(),
});

module.exports = validSchema;
