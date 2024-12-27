const express = require('express')
const { createTask, allTask, taskCount } = require('../controllers/taskController')
const router = express.Router()

router.route('/createTask')
.post(createTask)

router.route('/allTask')
.get(allTask)

router.route('/taskCount/:id')
.get(taskCount)

module.exports = router