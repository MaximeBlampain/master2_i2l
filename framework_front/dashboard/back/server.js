const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')

/* Routers */
const { userRouter, cryptoAssetRouter, cryptoRouter } = require("./routes")

/* Utils */
const {connectDatabase} = require("./utils/Sequelize")

/* Config */
const { PORT } = require("./config.json")

/* Requirements */
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

/* Routers */
app.use("/user", userRouter)
app.use("/crypto", cryptoRouter)
app.use("/asset", cryptoAssetRouter)

app.listen(PORT, () => {
  connectDatabase()
    .then(() => {
    console.log(`### Start server at PORT : ${PORT} ###`)
  })
    .catch((err) => {
      console.error(`An error occurred while server try to start`, err)
    })
})


