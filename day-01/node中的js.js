//用来获取机器信息
var os = require('os')

//用来操作路径
var path = require('path')

//获取当前机器的CPU信息
console.log(os.cpus())

//memory 内存
console.log(os.totalmem())

// 获取一个路径中的扩展名部分
// extname extension name
console.log(path.extname('c:/a/b/c/d/hello.txt'))

//https://nodejs.org/dist/latest-v10.x/docs/api/中可以查看更多的api