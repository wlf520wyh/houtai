$(() => {
    let signIn = $("#signIn");
    let logined = (inputEmail, inputPassword) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: "http://localhost:3000/setting/login",
                data: {
                    inputEmail,
                    inputPassword
                },
                success(data) {
                    resolve(data)
                }
            });
        });
    }
    signIn.click(async () => {
        // console.log(1)
        let inputEmail = $("#inputEmail").val();
        let inputPassword = $("#inputPassword").val();
        console.log(inputEmail, inputPassword);
        let data = await logined(inputEmail, inputPassword);
        console.log(data);
        if (data === 'fail') {
            console.log('登录失败');
            alert('用户名或者密码错误');
        } else {
            console.log('登录成功');
            alert('登录成功');
            localStorage.setItem('deng',data.tokes);
            location.href="dashboard.html";
            token.checkToken('deng');
        }
    })
})

