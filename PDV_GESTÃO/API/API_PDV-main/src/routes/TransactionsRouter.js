const express = require("express")
const TransactionsController = require("../controllers/TransactionsController.js")

const router = express.Router()

router.get('/',TransactionsController.getAll)
module.exports = router