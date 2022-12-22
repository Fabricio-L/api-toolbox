require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const port = process.env.PORT

app.get('/api/welcome', (req,res) => {
  res.status(200).send({message: 'Welcome to API'});
}); 

app.use('/file', require('./routes/data'))

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

module.exports = app