const express = require('express')
// 中间件
const router = express.Router()

const pageController = require('../controllers/pagesController.js')
// 前台页面
router.get('/', pageController.getIndexPage)
    .get('/list', pageController.getListPage)
    .get('/detail', pageController.getDetailPage)

    // 后端页面
    .get('/admin', pageController.getAdminIndexpage)



// 暴露路由模块
module.exports = router