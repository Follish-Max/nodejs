// function sayHi() {
//     console.log('Hi')
// }
// sayHi()

function callFunction(fun,name) {
    fun(name)
}
var sayHi = function (name) {
    console.log(name + 'Hi')
}

callFunction(sayHi,'follish')