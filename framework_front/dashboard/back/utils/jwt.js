const jwt = require('jsonwebtoken')
const { JWT_KEY } = require('../config.json')


function createToken(userId){
  return jwt.sign({userId}, JWT_KEY,{ "expiresIn": "24h" })
}

function verifyToken(token, userId){
  const decoded = jwt.verify(token, JWT_KEY)
  return decoded.userId === userId
}


module.exports = {
  createToken,
  verifyToken,
}