const { Sequelize } = require("sequelize")

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db/database.sqlite3'
})

async function connectDatabase (){
  try {
    await sequelize.sync()
    await sequelize.authenticate();
    console.log("### Connection to database successful ###")
  } catch (error) {
    console.error("ERROR, unable to connect to database")
    throw new Error(error)
  }
}

module.exports = {
  sequelize,
  connectDatabase
}
