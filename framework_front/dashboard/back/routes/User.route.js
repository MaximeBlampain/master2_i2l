const express = require("express")

/* Controllers */
const { findAll, create, edit, remove, findOne, authenticate } = require("../controllers/User.controller")

/* Schemas */
const { authenticateUser, createUser, updateUser, deleteUser } = require("../schemas/User.schema")

/* Token Middleware */
const { checkToken } = require("../utils/jwt")

const userRouter = express.Router()

userRouter.get("/ping", (req, res) => res.send("PONG"))

userRouter.get("/all", findAll)

userRouter.post("/auth", authenticateUser, authenticate)

userRouter.route("/")
    .post(createUser, create)
    .patch(checkToken, updateUser, edit)
    .delete(checkToken, deleteUser, remove)

userRouter.get("/:USER_ID", checkToken, findOne)

module.exports = userRouter