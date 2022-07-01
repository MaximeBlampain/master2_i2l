const Joi = require('joi')
const schemaValidator = require('../utils/schemaValidator')

function addCryptoAsset(req, res, next){
  const schema = Joi.object({
    USER_ID: Joi.string().uuid(),
    SYMBOL: Joi.string(),
    NUMBER_TOKEN: Joi.number(),
    PURCHASE_PRICE: Joi.number(),
  })
  schemaValidator(req, next, schema)
}

module.exports = {
  addCryptoAsset,
}