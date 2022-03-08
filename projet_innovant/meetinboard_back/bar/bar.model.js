const {DataTypes} = require('sequelize')
const {sequelize} = require("../utils/mysql")

const Bar = sequelize.define(
  "Bar",
  {
    id: {
      type: DataTypes.UUID,
      field: "id",
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      field: "name",
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      field: "mail",
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      field: "address",
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      field: "phone_number",
      allowNull: false,
    },
    atmosphere: {
      type: DataTypes.STRING,
      field: "atmosphere",
      allowNull: false,
    },
    accommodationCapacity : {
      type: DataTypes.NUMBER,
      field: "accommodationCapacity",
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "bar",
  }
)
sequelize.sync()

module.exports = Bar