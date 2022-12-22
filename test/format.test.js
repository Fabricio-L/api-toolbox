const chai = require('chai')
const { handleFileFormat } = require('../utils/handleFormat')

const expect = chai.expect

const value = "file,text,number,hex\ntest3.csv,xQbHBNlQorsiu,34923,3ac75e1c9bb9c03a8d6a1869180f66fb\ntest3.csv,jalGnrTZJOoxgamFrUZxoMm,7490,87e70f5a5d396d22aacfceda5891be2b\ntest3.csv,CZNQPmufmUTiTFuaByH,9221723648,72639197b95ba09c46c8677e19877e66"

describe('Format functions test collection', () => {
  it('Format the data', () => {
    expect(handleFileFormat(value)[0]).to.have.deep.property('file', 'test3.csv', 'lines')
  })
})