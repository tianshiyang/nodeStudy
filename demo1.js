const mongoose = require("mongoose");

/**连接MongoDB数据库
 * 指定连接的数据库不需要存在。当你插入第一条数据之后就会被自动创建出来*/
mongoose.connect("mongodb://localhost/test");

/**
 * 设计集合结构（表结构）
 * Schema 为架构
 * */
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      require: true, // 必须
    },
    password: {
      type: String,
      require: true, // 必须
    },
    email: {
      type: String,
      require: true, // 必须
    },
  });

/**
 * 将文档结构发布为模型
 * mongoose.model 方法就是用来将一个架构发布为model
 * 第一个参数: 传入一个大写首字母的单词，表示为数据库名称
 *             mongoose会自动将大写名词的字符串生成小写复数的集合的名称
 * 第二个参数： 架构Schema
 * 
 * 返回值： 模型结构函数
 * */

const User = mongoose.model('User', userSchema)
const admain = new User({
    username: '张三',
    password: 123456,
    email: "1685821150@qq.com"
})

// 新增
// admain.save((err,ret)=> {
//     if(err) {
//         console.log(err)
//     }
//     console.log(ret.find)
// })

// 查询
// User.find({
//     username: '张三' // 查询名称为xx的
// },(err,ret)=> {
//     if(err) {
//         console.log('查询失败')
//     }else {
//         console.log('查询成功！')
//         console.log(ret)
//     }
// })

// 删除
// User.remove({
//     username: '张三' // 查询名称为xx的
// },(err,ret)=> {
//     if(err) {
//         console.log('删除失败')
//     }else {
//         console.log('删除成功！')
//         console.log(ret)
//     }
// })