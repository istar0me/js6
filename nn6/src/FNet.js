
// FNet 必須支援 Point.grad(f) 與 f(p) 這兩個函數
// 這不太適合，一人分飾兩角
// 應該改成扮演 Function, 包含 call 與 grad 兩個函數
module.exports = class FNet {

  constructor(net, args) {
    this.net = net
    this.args = args
  }

  setValues(vars) {
    console.log('FNet.setValues:vars=', vars)
    for (let k in vars) {
      this.args[k].v = vars[k]
    }
  }

  getGrads() {
    let grads = []
    for (let k in this.args) {
      grads.push(this.args[k].g)
    }
    return grads
  }

  call(vars) {
    this.setValues(vars)
    let o = this.net.forward()
    return o.v
  }

  grad(vars) {
    this.call(vars)
    this.net.backward()
    return this.getGrads()
  }

  dump() {
    return this.net.dump()
  }
}
