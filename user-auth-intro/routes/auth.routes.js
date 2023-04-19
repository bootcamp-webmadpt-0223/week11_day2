const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

const User = require('./../models/User.model')

const saltRounds = 10


// Signup form render
router.get('/sign-up', (req, res) => {
  res.render('auth/signup-form')
})

// Signup form controller. Check if user does not exists and generate hashed password.
// 1. bcrypt.genSalt(saltRounds)
// 2. bcrypt.hash(password, salt)
router.post('/sign-up', async (req, res, next) => {
  try {
    const { username, email, password } = req.body

    const salt = await bcrypt.genSalt(saltRounds);
    const passwordHash = await bcrypt.hash(password, salt);
    await User.create({ email, username, password: passwordHash });
    res.redirect("/");
  } catch (error) {
    next(error);
  }
})


// Login form render
router.get('/login', (req, res) => {
  res.render('auth/login-form')
})


// Login form controller. Check if user exists and check if password matches: bcrypt.compareSync
// Login action -> req.session.currentUser = user
router.post('/login', async (req, res, next) => {

  const { email, password } = req.body

  if (!email || !password) {
    res.render('auth/login-form', { errorMessage: 'Por favor, rellena los campos' })
    return
  }

  const user = await User.findOne({ email });
  if (!user) {
    res.render('auth/login-form', { errorMessage: 'Usuario no registrado' })
  }
  else if (!bcrypt.compareSync(password, user.password)) {
    res.render('auth/login-form', { errorMessage: 'Datos incorrectos (es la pwd...)' })
  }
  else {
    req.session.currentUser = user 
    console.log('ESTO ES EL OBJETO req.session --->', req.session)
    res.redirect('/')
  }
})



// Logout controller -> req.session destroy method
router.get('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/'))
})



module.exports = router