import { Sequelize, DataTypes, Model } from "sequelize/types"

const sequelize = new Sequelize('sqlite::memory:');

class CryptoAssetModel extends Model {
  getAssetId(){ return this.ASSET_ID }

  getUserId(){ return this.USER_ID}
  setUserId(userId){ this.USER_ID = userId}

  getToken(){ return this.TOKEN }
  setToken(token){ this.TOKEN = token }

  getNumberToken(){ return this.NUMBER_TOKEN }
  setNumberToken(numberToken){ this.NUMBER_TOKEN = numberToken}

  getPurchaseDate(){ return this.PURCHASE_DATE }

  getPurchasePrice(){ return this.PURCHASE_PRICE }
  setPurchasePrice(purchasePrice){ this.PURCHASE_PRICE = purchasePrice }
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
  TOKEN: {
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
  tableName: 'User',
  modelName: 'User',
})