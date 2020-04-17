const express = require('express')
const router = require('./router')

const app = express()

app.use('/', router)

const serve = app.listen(5000, function() {
  const { address, port } = serve.address()
  console.log('Serve is running on http://', address, port)
})
