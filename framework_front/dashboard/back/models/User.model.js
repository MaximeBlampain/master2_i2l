const { DataTypes, Model } = require("sequelize")

const {sequelize} = require("../utils/Sequelize");

class UserModel extends Model {}

UserModel.init({
  USER_ID: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  FIRSTNAME: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LASTNAME: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  EMAIL: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  PASSWORD: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LANGUAGE_KEY:  {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: false,
  tableName: 'User',
  modelName: 'User',
})

module.exports = UserModel
/**
 * Model User
 *
 * Avatar
 * Lastname
 * Firstname
 * Email
 * Password
 * Language
 */