function say() {
    console.log('hello world')
}

say()

;(function () {
    console.log('hello')
}())

;['苹果','香蕉'].forEach(function (item) {
    console.log(item)
})

;`hello`.toString()

//当采用了无分号的代码风格的时候，只需要注意一下情况
//      当一行代码以：
//      （
//      [
//      `
//      开头的时候，则在前面不上一个分号用以避免一些语法上的解析错误