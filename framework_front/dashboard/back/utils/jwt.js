const jwt = require('jsonwebtoken')
const { JWT_KEY } = require('../config.json')


function createToken(USER_ID){
  return jwt.sign({USER_ID}, JWT_KEY,{ "expiresIn": "24h" })
}

function verifyToken(token){
  const decoded = jwt.verify(token, JWT_KEY)

  const isTokenValid = Date.now() < decoded.exp * 1000
  
  return isTokenValid
}

function checkToken(req, res, next){
  const { token } = req.headers

  if(!token) return res.status(401).send("No Token")

  if(!verifyToken(token)){
    return res.status(401).send("Invalid Token")
  }
  
  return next()
}


module.exports = {
  createToken,
  verifyToken,
  checkToken,
}