new Promise((resolve, reject) => {
    //模拟异步请求的请求
    setTimeout(() => {
        let user = {
            name: "wc",
            age: 18
        }
        if(user != null) {
            resolve(user)
        } else {
            reject("data null")
        }
    }, 1000)
}).then(
    (res) => {
        console.log("success:", res)
    },
    (err) => {
        console.log("fail:", err)
    }
)

