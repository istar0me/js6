const nn6 = require('../../nn6')
const net = require('./perceptron')

let p = net

nn6.Net.call(net, p)

console.log(net.toString())

nn6.Net.grad(net, p)

console.log(net.toString())
