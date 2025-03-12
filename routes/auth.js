//import....
const express = require('express')
const router = express.Router()

//import folder controller
const { register,login,currentUser,currentAdmin} = require('../controllers/auth')


router.post('/register', register)
router.post('/login',login)
router.post('/current-user',currentUser)
router.post('/current-admin',currentAdmin)


//export
module.exports = router