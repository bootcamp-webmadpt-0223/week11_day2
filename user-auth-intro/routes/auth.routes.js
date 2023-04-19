const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

const User = require('./../models/User.model')

const saltRounds = 10


// Signup form render
router.get('/sign-up', (req, res) => {
})

// Signup form controller. Check if user does not exists and generate hashed password.
// 1. bcrypt.genSalt(saltRounds)
// 2. bcrypt.hash(password, salt)
router.post('/sign-up', async (req, res, next) => {
})


// Login form render
router.get('/login', (req, res) => {
})


// Login form controller. Check if user exists and check if password matches: bcrypt.compareSync
// Login action -> req.session.currentUser = user
router.post('/login', async (req, res, next) => {
})



// Logout controller -> req.session destroy method
router.get('/logout', (req, res) => {
})



module.exports = router