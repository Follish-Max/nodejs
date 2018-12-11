var url = require('url')

var obj = url.parse('/pinglun?name=李白&message=你好',true)

console.log(obj)


console.log(obj.query)