const express = require("express")
const SalesBoxController = require("../controllers/SalesBoxController.js")
const CheckAdmin = require("../middlewares/CheckAdmin.js")

const router = express.Router()

router.get('/',SalesBoxController.getAll)
router.post('/', CheckAdmin, SalesBoxController.createSalesBox)

router.delete('/:id', CheckAdmin, SalesBoxController.deleteSaleBox)

router.put('/reinforce', CheckAdmin, SalesBoxController.reinforce)
router.put('/sangria', CheckAdmin, SalesBoxController.sangria)
router.put('/open', CheckAdmin, SalesBoxController.openSaleBox)
router.put('/close', CheckAdmin, SalesBoxController.closeSaleBox)
module.exports = router