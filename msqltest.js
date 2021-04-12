const { query } = require("express");
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "kefang",
});

connection.connect();

// 查询数据库
function mysqlFind(param, callback) {
  connection.query("SELECT * from user", function (error, results, fields) {
    if (error) throw error;
    console.log(param);
    callback(results);
  });
}

// 增加数据
function mysqlAdd(params,callback) {
  const sql = "insert into user(id,userName,userPwd) values(?,?,?) ";
  const sqlparams = [, params.params.userName, params.params.userPwd];
  connection.query(sql, sqlparams, (err, data) => {
    if (err) {
      callback("新增失败");
    } else {
      callback(data);
    }
  });
}

// 更新数据
function mysqlUpdate(callback) {
  const sql = "update user set userName=?,userPwd=? where userName='李四'";
  const sqlparams = ["王五", "asd123"];
  connection.query(sql, sqlparams, (err, data) => {
    if (err) {
      callback("更新失败");
    } else {
      callback(data);
    }
  });
}

// 删除数据
function mysqlDelete(callback) {
  const sql = "delete from user where userName = ?";
  const sqlParams = ["王五"];
  connection.query(sql, sqlParams, (err, data) => {
    if (err) {
      callback("删除失败");
    } else {
      callback(data);
    }
  });
}
module.exports = { mysqlFind, mysqlAdd, mysqlUpdate, mysqlDelete };
