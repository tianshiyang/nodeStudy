const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(require('cors')()) // 解决跨域

const router = require('./router/index.js')
app.use(router)


app.listen(3000,()=>{
    console.log('服务已启动。。。。')
})