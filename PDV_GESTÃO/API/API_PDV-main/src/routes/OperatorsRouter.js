const express = require("express")
const OperatorsController = require("../controllers/OperatorsController")

const router = express.Router()

router.get('/',OperatorsController.getAll)
router.post('/',OperatorsController.createOperators)
router.delete('/:idParam',OperatorsController.deleteOperators)

module.exports = router