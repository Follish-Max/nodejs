var template = require('art-template')
var fs = require('fs')

fs.readFile('./tpl.html',function (err,data) {
    if(err) {
        return console.log('读取文件失败...')
    }
    var ret = template.render(data.toString(),{
        name:'Follish',
        age:'18',
        hobbies:[
            'listen',
            'sing',
            'dance'
        ],
        title:'个人信息'

    })
    console.log(ret)
})