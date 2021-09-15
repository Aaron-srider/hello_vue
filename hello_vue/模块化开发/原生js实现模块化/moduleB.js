let moduleB = (function () {
    flag = 2;
    let result = moduleA.sum(flag, 2);

    return {
        flag: flag,
        result: result
    }
})()