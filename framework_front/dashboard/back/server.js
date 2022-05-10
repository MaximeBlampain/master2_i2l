const express = require("express")
const bodyParser = require('body-parser')

/* Routers */
const { userRouter, cryptoAssetRouter} = require("./routes")

/* Utils */
const { createToken, verifyToken } = require("./utils/jwt")
const {connectDatabase} = require("./utils/Sequelize")

/* Config */
const { PORT } = require("./config.json")

/* Requirements */
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* Routers */
app.use("/user", userRouter)
app.use("/crypto", cryptoAssetRouter)

app.get("/", (req, res) => res.send("Hello World"))
app.get("/token", (req, res) => res.send(createToken("Hello World")))
app.get("/checktoken", (req, res) => res.send(verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJIZWxsbyBXb3JsZCIsImlhdCI6MTY1MTI1NTUzNywiZXhwIjoxNjUxMzQxOTM3fQ.hwhHQNOt7x-HEIRgGbZnCRD7bxSKe6BjFcsn3xJ4y0w", "Hello World")))

app.listen(PORT, () => {
  connectDatabase()
    .then(() => {
    console.log(`### Start server at PORT : ${PORT} ###`)
  })
    .catch((err) => {
      console.error(`An error occurred while server try to start`, err)
    })
})


