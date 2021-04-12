const express = require('express')


const {mysqlFind, mysqlAdd, mysqlUpdate, mysqlDelete} = require('../msqltest.js')
const router = express.Router()
    router.get('/',(req, res)=> {
        console.log(__filename)
        res.send('123456')
    })
    router.get('/index',(req, res)=> {
        // 获取传递的参数 req.query
        const param = req.query 
        mysqlFind(param,data=>{
            res.status(202)
            res.json(data)
        })
    })

    router.post('/add', (req,res)=> {
        // post获取传递的参数 req.body
        const params = req.body
        mysqlAdd(params,(data)=>{
            res.json(data)
        })
    })

    router.get('/update',(req, res)=>{
        mysqlUpdate(data=> {
            res.json(data)
        })
    })
    router.get('/del',(req,res)=> {
        mysqlDelete(data=> {
            res.json(data)
        })
    })
module.exports = router
