const router = require('express').Router()
const CustomerController = require('../controllers/customers')
const ProductsController = require('../controllers/products')
const RequireController = require('../controllers/request')

router.get('/customers/:id?', CustomerController.get)
router.post('/customers', CustomerController.post)
router.delete('/customers/:id', CustomerController.del)

router.get('/products/:id?', ProductsController.get)
router.post('/products', ProductsController.post)
router.delete('/products/:id', ProductsController.del)

router.get('/requests/:id?', RequireController.get)
router.post('/requests', RequireController.post)
router.put('/requests/:id', RequireController.put)

module.exports = router