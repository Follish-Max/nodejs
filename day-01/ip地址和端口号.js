//ip地址用来定位计算机
//端口号用来定位具体的应用程序
//所有需要联网通信的应用程序都会占用一个端口号

var http = require('http')

var server = http.createServer()
//request 请求事件处理函数，需要接受两个参数：
//      Request请求对象（可以用来获取客户端额一些请求信息，如请求路径）
//      Response 响应对象（可以用来给客户端发送响应消息）
server.on('request',function (req,res) {
    console.log('收到请求了，路径为：'+req.url)
    console.log('请求我的客户端的地址和端口号为：',req.socket.remoteAddress, req.socket.remotePort)
    res.end("hello nodejs")
})
server.listen(5000,function () {
    console.log('running...')
})