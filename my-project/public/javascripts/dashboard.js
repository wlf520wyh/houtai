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
        console.log(data);
        let html = data.map((item,index)=>{
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
    })()
})