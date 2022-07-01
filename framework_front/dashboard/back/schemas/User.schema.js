const Joi = require('joi')
const schemaValidator = require('../utils/schemaValidator')

/**
 * This function validates the request body against a Joi schema
 * @param req - The request object
 * @param res - The response object
 * @param next - The next middleware function in the stack.
 */
function createUser(req, res, next){
  const schema = Joi.object({
    FIRSTNAME: Joi.string(),
    LASTNAME: Joi.string(),
    EMAIL: Joi.string().email(),
    PASSWORD: Joi.string(),
    LANGUAGE_KEY: Joi.string(),
  })
  schemaValidator(req, next, schema)
}

/**
 * This function validates the request body against a Joi schema
 * @param req - The request object
 * @param res - The response object
 * @param next - The next middleware function in the stack.
 */
function updateUser(req, res, next){
  const schema = Joi.object({
    USER_ID: Joi.string().uuid(),
    fieldsToEdit: Joi.object({
      FIRSTNAME: Joi.string(),
      LASTNAME: Joi.string(),
      EMAIL: Joi.string().email(),
      PASSWORD: Joi.string(),
      LANGUAGE_KEY: Joi.string(),
    }),
  })
  schemaValidator(req, next, schema)
}

/**
 * This function validates the request body against a Joi schema
 * @param req - The request object
 * @param res - The response object
 * @param next - The next function in the middleware chain.
 */
function deleteUser(req, res, next){
  const schema = Joi.object({
    USER_ID: Joi.string().uuid()
  })
  schemaValidator(req, next, schema)
}

/**
 * This function validates the request body against a Joi schema
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is a function that we call when we're done with the middleware.
 */
function authenticateUser(req, res, next){
  const schema = Joi.object({
    EMAIL: Joi.string().email(),
    PASSWORD: Joi.string(),
  })
  schemaValidator(req, next, schema)
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  authenticateUser,
}