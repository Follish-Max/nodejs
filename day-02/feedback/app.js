//当前模块所有的依赖项都声明在文件模块的最上面
var http = require('http')

var url = require('url')

var template = require('art-template')

var fs = require('fs')

var comments = [
    {
        name:'张三',
        message:'今天真冷！',
        dataTime:'2015-10-16'
    }
]

http
    .createServer(function (req,res) {
        var parseObj = url.parse(req.url,true)
        var pathname = parseObj.pathname

        //res.end('hello')

        if (pathname === '/') {
            fs.readFile('./views/index.html',function (err,data) {
                if (err) {
                    return res.end('404 Not Found.')
                }
                var htmlStr = template.render(data.toString(),{
                    content:comments
                })
                res.end(htmlStr)
            })
        } else if(pathname === '/pinglun') {
            var comment = parseObj.query

            comment.dataTime = '2018-12-11 16:40:23'

            comments.unshift(comment)
            res.statusCode = 302
            res.setHeader('Location','/')
            res.end()
        } else if(pathname === '/post') {
           fs.readFile('./views/post.html',function (err,data) {
               if (err) {
                   return res.end('404 Not Found.')
               }
               res.end(data)
           })
        } else if(pathname.indexOf('/public/') === 0) {
            fs.readFile('.' + pathname,function (err,data) {
                if(err) {
                    return res.end('404 Not Found.')
                }
                res.end(data)
            })
        } else {
            fs.readFile('./views/404.html',function (err,data) {
                if(err) {
                    return res.end('404 Not Found.')
                }
                res.end(data)
            })
        }
    })
    .listen(3000,function () {
        console.log('running...')
    })