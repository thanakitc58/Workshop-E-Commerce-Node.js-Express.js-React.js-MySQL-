//import
const express = require('express')
const router = express.Router()

const { create,list,remove} = require('../controllers/category')


//@ENDPOINT http://localhost:5002/api/category
router.post('/category',create)
router.get('/category',list)
router.delete('/category/:id',remove)




//export
module.exports = router