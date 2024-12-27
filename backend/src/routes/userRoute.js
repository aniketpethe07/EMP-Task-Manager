const express = require('express')
const { loginUser, allEmployees } = require('../controllers/userController')
const router = express.Router()

router.route('/login')
.post(loginUser)

router.route('/employees')
.get(allEmployees)

module.exports = router