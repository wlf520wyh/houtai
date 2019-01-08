$(() => {
    // console.log(name.length);
    let login = (name, age, skill, description) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: "http://localhost:3000/setting/register",
                data: {
                    name,
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
    $('.btn').click(async () => {
        let name = $('#inputEmail4').val();
        let age = $('#inputAddress').val();
        let skill = $('#inputAddress2').val();
        let description = $('#inputCity').val();
        if(name.length == 0){
            alert("未输入用户名");
            return;
        }
        else if(age.length == 0){
            alert("未输入年龄");
            return;
        }
        else if(skill.length == 0){
            alert("未输入技能");
            return;
        }
        else if(description.length == 0){
            alert("未输入备注");
            return;
        }else{
            let data = await login(name, age, skill, description);
            // console.log(data);
            alert("插入成功");
            location.href="../find.html";
        }
    });
})