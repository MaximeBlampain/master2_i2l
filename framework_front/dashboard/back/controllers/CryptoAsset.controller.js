const CryptoAssetModel = require("../models/CryptoAsset.model")

async function findAll(req, res){
  const assets = await CryptoAssetModel.findAll()

  return res.status(200).json(assets)
}

async function findOne(req, res){
  const asset = await CryptoAssetModel.findOne({
    where: {
      ASSET_ID: req.params.ASSET_ID
    }
  })

  if(!asset) return res.status(404).send("Asset not found")

  return res.status(200).json(asset)
}

async function findByUser(req, res){
  const assets = await CryptoAssetModel.findAll({
    where: {
      USER_ID: req.params.USER_ID
    }
  })

  if(!assets) return res.status(404).send("No assets linked to this user")

  return res.status(200).json(assets)
}

async function create(req, res){
  console.log("req.body", req.body)
  const newAsset = await CryptoAssetModel.create({...req.body})

  return res.status(201).json(newAsset)
}

async function destroy(req, res){
  const assetToDelete = await CryptoAssetModel.findOne({
    where: {
      ASSET_ID: req.params.ASSET_ID
    }
  })

  if(!assetToDelete) res.status(404).send("Asset to delete not found")

  await assetToDelete.destroy()

  return res.status(204).send("Asset deleted !")
}

module.exports = {
  findAll,
  findOne,
  findByUser,
  create,
  destroy,
}
