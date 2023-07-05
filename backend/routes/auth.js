const express = require('express')
const {login, register, logout} = require('../controllers/auth')



const authRoutes = express.Router()

authRoutes.post("/login",login) 
authRoutes.post("/register",register) 
authRoutes.post("/logout",logout) 

module.exports = authRoutes