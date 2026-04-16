const express = require("express")
const SalesController = require("../controllers/SalesController.js")

const router = express.Router()

router.get('/',SalesController.getAll)
router.post('/',SalesController.createSale)
router.delete('/:id',SalesController.deleteSale)
module.exports = router