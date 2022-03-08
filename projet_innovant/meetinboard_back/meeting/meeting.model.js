const {DataTypes} = require('sequelize')
const {sequelize} = require("../utils/mysql")

const Meeting = sequelize.define(
  "Meeting",
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
    description: {
      type: DataTypes.STRING,
      field: "description",
      allowNull: false,
    },
    maxPlayers: {
      type: DataTypes.NUMBER,
      field: "max_players",
      allowNull: false,
    },
    minPlayers: {
      type: DataTypes.NUMBER,
      field: "min_players",
      allowNull: false,
    },
    creator: {
      type: DataTypes.UUID,
      field: "creator",
      allowNull: false,
    },
    game: {
      type: DataTypes.STRING,
      field: "game",
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      field: "date",
      allowNull: false,
    },
    timeStart: {
      type: DataTypes.TIME,
      field: "time_start",
      allowNull: false,
    },
    timeEnd: {
      type: DataTypes.TIME,
      field: "time_end",
    },
  },
  {
    timestamps: false,
    tableName: "meeting",
  }
)
sequelize.sync()

module.exports = Meeting