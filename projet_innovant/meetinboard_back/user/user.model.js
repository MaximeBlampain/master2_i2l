const {DataTypes} = require('sequelize')
const {sequelize} = require("../utils/mysql")

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      field: "id",
      defaultValue: DataTypes.UUIDV4,
    },
    pseudo: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "pseudo",
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "email",
    },
    provider: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "provider",
    },
    providerKey: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "provider_key",
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "fullname",
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "avatar",
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: "birthday",
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "phone_number",
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "gender",
    },
  },
  {
    timestamps: false,
    tableName: 'user'
  }
)

sequelize.sync()

module.exports = User
