const express = require("express")
const AuthController = require("../controllers/AuthController.js")
const CheckToken = require("../middlewares/CheckTokenMiddleware.js")

const router = express.Router()

router.post('/login',AuthController.login)
router.get('/getProfile',CheckToken, AuthController.getProfile)
router.get('/validateToken', AuthController.validateToken)


module.exports = router