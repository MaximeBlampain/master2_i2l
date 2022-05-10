const Joi = require('joi')
const schemaValidator = require('../utils/schemaValidator')

function addCryptoAsset(req, res, next){
  const schema = Joi.object({
    userId: Joi.string().uuid().required(),
    token: Joi.string().required(),
    numberToken: Joi.number().required(),
  }).required()
  schemaValidator(req, next, schema)
}

function deleteCryptoAsset(req, res, next){
  const schema = Joi.object({
    assetId: Joi.string().uuid().required()
  }).required()
}

module.exports = {
  addCryptoAsset,
  deleteCryptoAsset,
}