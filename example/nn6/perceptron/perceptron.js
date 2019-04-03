const nn6 = require('../../../nn6')
const net = new nn6.Net()

let iLayer = net.inputLayer([2]) // 模仿 and gate [1,1] => [1]
let pLayer = net.push(nn6.PerceptronLayer, {n:1})
let rLayer = net.push(nn6.RegressionLayer)
net.watch({x:iLayer.o, o:rLayer.x})

module.exports = net
