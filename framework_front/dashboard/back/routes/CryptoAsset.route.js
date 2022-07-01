const express = require("express")

/* Controllers */
const { findAll, create, findOne, findByUser, destroy } = require("../controllers/CryptoAsset.controller")

/* Schemas */
const { addCryptoAsset } = require("../schemas/CryptoAsset.schema")

/* Token Middleware */
const { checkToken } = require("../utils/jwt")

const cryptoAssetRouter = express.Router()

cryptoAssetRouter.get("/ping", (req, res) => res.send("PONG"))

cryptoAssetRouter.get("/all", findAll)

cryptoAssetRouter.post("/", checkToken, addCryptoAsset, create)

cryptoAssetRouter.route("/:ASSET_ID")
  .get(checkToken, findOne)
  .delete(checkToken, destroy)

cryptoAssetRouter.get("/user/:USER_ID", checkToken, findByUser)


module.exports = cryptoAssetRouter