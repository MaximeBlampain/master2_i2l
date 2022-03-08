const express = require("express")
const app = express()

const cookieParser = require('cookie-parser')
const cors = require('cors')

const {API_PORT} = require('./config.local.json')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());


// allow cors requests from any origin and with credentials
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));


// api routes
//app.use('/users', require('./users/users.controller'));
//app.use('/recettes', require('./recettes/recettes.controller'));

app.listen(API_PORT, function(){
    console.log(`${API_PORT}`)
})