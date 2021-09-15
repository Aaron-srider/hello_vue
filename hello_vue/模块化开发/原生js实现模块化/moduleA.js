let moduleA = (function () {
    function sum(a, b) {
        return a + b;
    }

    let flag = 1;

    return {
        sum: sum,
        flag: flag
    }
})()