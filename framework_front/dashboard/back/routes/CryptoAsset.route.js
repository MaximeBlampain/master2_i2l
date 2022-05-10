const express = require("express")
const cryptoAssetRouter = express.Router()

cryptoAssetRouter.get("/ping", (req, res) => res.send("PONG"))


module.exports = cryptoAssetRouter