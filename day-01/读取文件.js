//fs是file-system的简写，文件系统
//使用require方法加载fs核心模块
var fs = require('fs')

fs.readFile('./data/hello.txt',function (error,data) {
    //成功error为null

    if(error){

        console.log('读取文件失败')
    }else {

        console.log(data.toString())
    }
})