var express = require('express');
var router = express.Router();
var {
    find,
    insert,
    del,
    update
} = require("../libs/mysql.js");

/* 让用户清单s. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.post('/findUser', async (req, res, next) => {
    let {
        id,
        zhanghao,
        hobby
    } = req.body
    let data = await find(`mysqlss`, {
        id
    })
    res.send(data);
});

router.post('/login', async (req, res, next) => {
    let {
        inputEmail,
        inputPassword
    } = req.body
    let data = await find(`mysqlss`, {
        zhanghao: inputEmail
    })
    console.log(data);
    console.log(data[0].mima)
    if (data[0].mima === inputPassword) {
        res.send("success");
    } else {
        res.send("fail");
    }
});

module.exports = router;