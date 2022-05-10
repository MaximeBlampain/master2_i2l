const express = require("express")

/* Controllers */
const { findAll, create, edit, findOne } = require("../controllers/User.controller")

/* Schemas */
const { authenticateUser, createUser, updateUser, deleteUser } = require("../schemas/User.schema")

const userRouter = express.Router()

userRouter.get("/ping", (req, res) => res.send("PONG"))

userRouter.get("/all", findAll)

userRouter.post("/", createUser, create)

module.exports = userRouter