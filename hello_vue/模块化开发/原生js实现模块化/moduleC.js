let moduleC = (function () {
    console.log("flag in moduleA", moduleA.flag)
    console.log("flag in moduleB", moduleB.flag)
})()