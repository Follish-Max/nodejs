//1.加载http核心模块
var http = require('http')

//2.使用http.createserver（）方法创建一个web服务器
var server = http.createServer()

//3.注册一个request请求事件
server.on('request',function (req,res) {
    // console.log('收到客户端的请求了,请求路径是：'+req.url)
    // res.end('hello nodejs')

    var url = req.url;
    if(url === '/') {
        res.end('index page nodejs')
    } else if(url === '/login') {
        res.end('login page nodejs')
    } else {
        res.end('404 Not Found')
    }
})

//4.绑定端口号，启动服务器
server.listen(3000,function () {
    console.log('服务器启动成功了，可以通过 http://127.0.0.1:3000 来进行访问')
})
