const express = require('express')
const { createTask, allTask, taskCount, taskStatus } = require('../controllers/taskController')
const router = express.Router()

router.route('/createTask')
.post(createTask)

router.route('/allTask')
.get(allTask)

router.route('/taskCount/:id')
.get(taskCount)

router.route('/taskStatus/:id')
.post(taskStatus)

module.exports = router