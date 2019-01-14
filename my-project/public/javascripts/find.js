$(() => {
    //利用原有套路
    // console.log(name);
    let getToken = (name, currentPage, qty) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                headers: {
                    token: localStorage.getItem("deng")
                },
                url: "http://localhost:3000/users/autoLogin",
                data: {
                    name,
                    currentPage,
                    qty
                },
                success(data) {
                    resolve(data)
                }
            })
        })
    }

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
        let sta = await getToken();
        if (sta.status) {
            let names = () => {
                return new Promise((resolve, reject) => {
                    let name = $("#finds").val();
                    resolve(name);
                });
            }
            $('#btn_block').on('click', async function () {
                if($("#finds").val().length == 0){
                    alert("未搜索用户名");
                    return;
                }
                let name = await names();
                let datas = await findes(name);
                let htmls = datas.map((item) => {
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
                // console.log(datas);
            });
        } else {
            location.href = "login.html";
        }
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
    $('#btn_every').on('click', async function () {
            let name = $("#finds").val();
            let nuname = $('#inputEmail4').val();
            let age = $('#inputAddress').val();
            let skill = $('#inputAddress2').val();
            let description = $('#inputCity').val();
        if (nuname.length == 0) {
            alert("未输入用户名");
            return;
        }
        else if (age.length == 0) {
            alert("未输入年龄");
            return;
        }
        else if (skill.length == 0) {
            alert("未输入技能");
            return;
        }
        else if (description.length == 0) {
            alert("未输入备注");
            return;
        } else {
            let data = await unames(name, nuname, age, skill, description);
            if (data) {
                alert('更改成功点击跳到查询页');
                location.href = "dashboard.html";
            }
        }
    });
})
