const Cryptr = require("cryptr")
const { CRYPTR_KEY } = require('../config.json')
const cryptr = new Cryptr(CRYPTR_KEY)

function encrypt(key){
  return cryptr.encrypt(key)
}

function decrypt(key){
  return cryptr.decrypt(key)
}

module.exports = {
  encrypt,
  decrypt,
}