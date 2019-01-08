$(() => {
    //利用原有套路
    // console.log(name);
    let findes = (name) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: "http://localhost:3000/setting/finda",
                data: {
                    name
                },
                success(data) {
                    resolve(data)
                }
            })
        })
    }
    (async () => {
        let names = () => {
            return new Promise((resolve, reject) => {
                let name = $("#finds").val();
                resolve(name);
            });
        }
        $('#btn_block').on('click', async function () {
            let name = await names();
            let datas = await findes(name);
            let htmls = datas.map((item, index) => {
                return `
                    <tr>
                        <td>${item._id}</td>
                        <td>${item.name}</td>
                        <td>${item.age}</td>
                        <td>${item.skill}</td>
                        <td>${item.description}</td>
                    </tr>            
                `
            }).join("");
            $("#listed").html(htmls);
            console.log(datas);
        });
    })()

    //得到了单个后然后修改单个
    let unames = (
        name,
        nuname,
        age,
        skill,
        description
    ) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: "http://localhost:3000/setting/findg",
                data: {
                    name,
                    nuname,
                    age,
                    skill,
                    description
                },
                success(data) {
                    resolve(data)
                }
            });
        });
    }
    $('#btn_every').on('click',async function () {
        let name = $("#finds").val();
        let nuname = $('#inputEmail4').val();
        let age = $('#inputAddress').val();
        let skill = $('#inputAddress2').val();
        let description = $('#inputCity').val();
        let data = await unames( name,nuname,age,skill,description);
        if(nuname.length == 0){
            alert("未输入用户名，原名也可以");
            return;
        }
        else if(age.length == 0){
            alert("未输入年龄，原数也可以");
            return;
        }
        else if(skill.length == 0){
            alert("未输入技能，原技能也可以");
            return;
        }
        else if(description.length == 0){
            alert("未输入备注，，原备注也可以");
            return;
        }else{
            if(data){
            alert('更改成功点击跳到查询页'); 
            location.reload();
            }
        }
        
    });
})