const express = require("express")
const MethodsController = require("../controllers/MethodsController")

const router = express.Router()

router.get('/',MethodsController.getAll)
router.post('/',MethodsController.createMethods)
router.delete('/:idParam',MethodsController.deleteMethods)

module.exports = router