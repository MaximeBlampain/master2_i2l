const { DataTypes, Model } = require("sequelize")

const {sequelize} = require("../utils/Sequelize");

class CryptoAssetModel extends Model {
}

CryptoAssetModel.init({
  ASSET_ID: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  USER_ID: {
    type: DataTypes.UUID,
    allowNull: false
  },
  SYMBOL: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  NUMBER_TOKEN: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  PURCHASE_DATE: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  PURCHASE_PRICE: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: false,
  tableName: 'CryptoAsset',
  modelName: 'CryptoAsset',
})

module.exports = CryptoAssetModel