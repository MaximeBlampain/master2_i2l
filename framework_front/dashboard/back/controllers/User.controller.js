const User = require('../models/User.model')

const { encrypt } = require("../utils/crypt");

async function findAll(req, res){

  const users = await User.findAll();

  res.send(users)
}

async function create(req, res){
  const {
    firstname: FIRSTNAME,
    lastname: LASTNAME = "",
    email: EMAIL,
    password: PASSWORD,
    languageKey: LANGUAGE_KEY,
  } = req.body

  const newUser = await User.create({
    FIRSTNAME,
    LASTNAME,
    EMAIL,
    PASSWORD: encrypt(PASSWORD),
    LANGUAGE_KEY,
  })

  res.send(newUser)
}

module.exports = {
  findAll,
  create
}