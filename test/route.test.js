const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')

const should = chai.should()
chai.use(chaiHttp)

describe('Route test collection', () => {
  it('Get file list', (done) => {
    chai.request(app)
      .get('/file/data')
      .end((error, response) => {
        response.should.have.status(200)
        response.body.should.be.a('object')
        done()
      })
  })

  it('Get file data', (done) => {
    chai.request(app)
      .get('/file/data/test1.csv')
      .end((error, response) => {
        response.should.have.status(200)
        response.body.should.be.a('object')
        done()
      })
  })
})