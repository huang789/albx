const express = require('express')
const router = express.Router()

const usersController = require('../controllers/usersController.js')

router.get('/', usersController.getIndexPage)

// 暴露路由模块
module.exports = router