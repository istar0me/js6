let se6 = require('../../se6')
let {expect, 希望, 願, 確認, 驗證} = se6
let assert = require('assert')

describe('se6.expect', function() {
  it('error test', function() {
    // assert(typeof 2 === 'string')
    expect(2).to.be.a('string')
  })
})