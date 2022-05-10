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
    firstname: Joi.string(),
    lastname: Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    languageKey: Joi.string(),
  }).required()
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
    firstname: Joi.string(),
    lastname: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string(),
    languageKey: Joi.string(),
  }).required()
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
    userId: Joi.string().uuid()
  }).required()
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
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }).required()
  schemaValidator(req, next, schema)
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  authenticateUser,
}