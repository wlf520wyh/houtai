var express = require('express');
var router = express.Router();
var {
    connect,
    insert,
    find,
    ObjectId,
    del,
    update
} = require("../libs/mongo.js");
var token = require('../libs/token');

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
//渲染 查
router.post('/findUser', async (req, res, next) => {
    let {
        name
    } = req.body
    let data = await find(`ccc`, name ? {
        name
    } : {})
    res.send(data);
});

//插入 增
router.post('/register', async (req, res, next) => {
    let {
        name,
        age,
        skill,
        description
    } = req.body
    // console.log(666);
    let data = await insert(`ccc`, [{
        name,
        age,
        skill,
        description
    }])
    res.send(data);
});

//删除 删
router.post('/dell', async (req, res, next) => {
    let {
        name
    } = req.body
    console.log(666);
    let data = await del(`ccc`, {
        name
    });
    res.send(data);
    // console.log(data);
});

//查询单个名字
router.post('/finda', async (req, res, next) => {
    let {
        name
    } = req.body;
    console.log(req.body);
    let data = await find(`ccc`, {
        name
    });
    res.send(data);
});

//改
router.post('/findg', async (req, res, next) => {
    let {
        name,
        nuname,
        age,
        skill,
        description
    } = req.body;
    console.log(nuname);
    let data = await update(`ccc`, {
        name
    }, {
            name: nuname,
            age: age,
            skill: skill,
            description: description
        });
    res.send(data);
});

//登录
router.post('/login', async (req, res, next) => {
      let {
        inputEmail,
        inputPassword
      } = req.body
      let data = await find(`ccc`, {
        name: inputEmail
      })
      console.log(data);
      if (data[0].password == inputPassword) {
        res.send({
            tokes : token.createToken({
                inputEmail,
                inputPassword
            },1200)
        });
      }else {
        res.send("fail");
      }
    });
module.exports = router;