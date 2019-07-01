// 引入核心模块
const express = require("express")

const router = require('./routers/index.js')
// 创建应用
const app = express()
// 添加服务器端口并监听
app.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
})
app.use('/assets', express.static('assets'))
app.use('/uploads', express.static('uploads'))
// 添加路由配置
app.use(router)