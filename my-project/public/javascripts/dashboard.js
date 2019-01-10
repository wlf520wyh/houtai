$(() => {
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
    (async () => {
        let sta = await getToken();
        if (sta.status) {
            let data = await getUserList();
            console.log(data);
            let html = data.map((item, index) => {
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
            $("#list").html(html);
        } else {
            location.href = "login.html";
        }
    })()
})