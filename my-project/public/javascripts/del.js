$(() => {
    let getUserList = () => {
        return new Promise((resolve, reject) => {
            // console.log(666);、
            $.ajax({
                type: "POST",
                url: "http://localhost:3000/setting/findUser",
                success(data) {
                    resolve(data)
                }
            })
            // console.log(555);
        })
    }
    (async ()=>{
        let data = await getUserList();
        // console.log(data);
        let html = data.map((item,index)=>{
            return `
                <tr id='tr'>
                    <td>${item._id}</td>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>${item.skill}</td>
                    <td>${item.description}</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;<button class="deltt" style="background: #fff;">删除</button></td>
                </tr>            
            `
        }).join("");
        $("#list").html(html);
    })()
    //接下来就是请求一波删除一波
    let delt = (name) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: "http://localhost:3000/setting/dell",
                data: {
                    name
                },
                success(data) {
                    resolve(data)
                }
            })
        })
    }
    // console.log(delt);
    //给点击事件
    $("#list").on('click','.deltt',async function(){
        let name = $(this).parent().prev().prev().prev().prev().html();
        // console.log(name);
        let data = await delt(name);
        alert("successfully delete");
        $(this).parent().parent().remove();
    });

    $("#btn_del").on('click', function(){
        alert('做梦');
    });
})