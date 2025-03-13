//import
const express = require('express')
const router = express.Router()


// @ENDPOINT http://localhost:5002/api/product
const { create,list,remove,listby,searchFilter} = require('../controllers/product')


router.post('/product',create)
router.get('/products/:count',list)
router.delete('/product/:id',remove)
//endpoint นี้เอาไป sort product 
router.post('/productby',listby)
router.post('/search/filters',searchFilter)


module.exports = router