const express = require('express')
const router = express.Router()
const $sql = require('../dao/sqlmap')
const conn = require('../util/connect')

const jsonWrite = function(res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

// 增加用户接口
router.post('/addUser', (req, res) => {
  const sql = $sql.user.add
  const params = req.body
  console.log(params)
  conn.query(sql, [params.username, params.age], function(err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
module.exports = router
