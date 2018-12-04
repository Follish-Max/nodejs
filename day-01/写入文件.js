var fs = require('fs')

fs.writeFile('./data/hello.txt','大家好,我是Follish-Max',function (error) {
    if(error) {
        console.log('写入失败')
    } else {
        console.log('写入成功')
    }
    
})