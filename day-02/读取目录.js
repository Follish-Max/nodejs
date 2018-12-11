var fs = require('fs')

fs.readdir('E:/Github',function (err,files) {
    if(err) {
        return console.log('目录不存在')
    }
    console.log(files)
})
