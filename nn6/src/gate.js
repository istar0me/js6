module.exports = G = {}

class Gate {}

class Gate1 extends Gate {
  constructor(o, x, f, gfx) {
    super()
    this.p = {o:o, x:x, f:f, gfx:gfx}
  }

  forward() {
    let {o, x, f} = this.p
    o.v = f(x.v)
    o.g = x.g = 0
  }

  backward() {
    let {o,x,gfx} = this.p
    x.g += gfx(x.v) * o.g
  }
}

class Gate2 extends Gate {
  constructor(o, x, y, f, gfx, gfy) {
    super()
    this.p = {o:o, x:x, y:y, f:f, gfx:gfx, gfy:gfy||gfx}
  }

  forward() {
    let {o, x, y, f} = this.p
    o.v = f(x.v, y.v)
    o.g = x.g = y.g = 0
  }

  backward() {
    let {o,x,y,gfx,gfy} = this.p
    x.g += gfx(x.v, y.v) * o.g
    y.g += gfy(x.v, y.v) * o.g
  }
}

Object.assign(G, {Gate, Gate1, Gate2 })

/*
G.TensorGate1 = class TensorGate1 extends Gate1 {
  constructor(o, x, f, gfx) {
    super()
    this.p = {o:o, x:x, f:f, gfx:gfx}
  }

  forward() {
    let {o, x, f} = this.p
    o.v = f(x.v)
    o.g = x.g = 0
  }

  backward() {
    let {o,x,gfx} = this.p
    x.g += gfx(x.v) * o.g
  }
}


G.TensorGate2 = class TensorGate2 extends Gate2 {
  constructor(o, x, y, f, gfx, gfy) {
    super()
    this.p = {o:o, x:x, y:y, f:f, gfx:gfx, gfy:gfy||gfx}
  }

  forward() {
    let {o, x, y, f} = this.p
    f(o, x, y)
    V.oassign(o.g, 0)
  }

  backward() {
    let {o,x,y,gf} = this.p
    gf(o, x, y)
    // gfy(o, x, y)
    // x.g += gfx(x.v, y.v) * o.g
    // y.g += gfy(x.v, y.v) * o.g
  }
}
*/