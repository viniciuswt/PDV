const express = require("express")
const ProductsController = require("../controllers/ProductsController")

const router = express.Router()

router.get('/',ProductsController.getAll)
router.get('/:idParam',ProductsController.getById)

module.exports = router