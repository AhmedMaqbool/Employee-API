const Joi = require("joi");

const bodySchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  date_of_birth: Joi.string().required(),
  gender: Joi.string().required().max(1),
  salary: Joi.number().required(),
  status: Joi.string().required(),
});

module.exports = {
  bodySchema,
};
