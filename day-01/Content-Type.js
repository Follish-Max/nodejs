var fs = require('fs')

var http = require('http')

var server = http.createServer()

server.on('request',function (req,res) {
    var url = req.url

    if(url === '/') {
        fs.readFile('./dat/index.html',function (err,data) {
            if(err) {
                res.setHeader('Content-Type','text/plain;charset=utf-8')
                res.end('文件读取失败...')
            } else {
                res.setHeader('Content-Type','text/html;charset=utf-8')
                res.end(data)
            }
        })
    }
})

server.listen(3000,function () {
    console.log('Server is running...')
})