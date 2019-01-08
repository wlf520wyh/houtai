let{
    insert,
    find,
    del,
    update,
    ObjectId
} = require("./mongo.js");

(async ()=>{
    // 插入
    // insert("ccc",[{
    //     name: "卢嘉俊",
    //     age: 27,
    //     skill : "花式枪术",
    //     description : "漫游"
    // }])

    //查全部
    // let data = await find("ccc",{});
    // console.log(data);

    //根据name查询
    // let data = await find("ccc",{
	// 	name : "鞠婧祎"
	// });
    // console.log(data);

    //删
    // del("ccc",{
    //     name : '鞠婧祎'
    // });

    //改
    // update("ccc",{
    //     name:'老姚'//里面有age18的
    // },{
    //     age:17//改1个
    // });
})()