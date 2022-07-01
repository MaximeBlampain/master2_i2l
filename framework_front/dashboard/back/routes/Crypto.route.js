const express = require("express")

/* Controllers */
const { ping, findAll, findOne} = require("../controllers/Crypto.controller")

/* Token Middleware */
const { checkToken } = require("../utils/jwt")

const cryptoRouter = express.Router()

cryptoRouter.get("/ping", ping)

cryptoRouter.get("/all", checkToken, findAll)

cryptoRouter.get("/:coin", checkToken, findOne)

module.exports = cryptoRouter
