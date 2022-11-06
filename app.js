const express = require('express')
const app = express()
const routes = require('./routes')
const PORT = 3000
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

app.use(routes)
require('./config/mongoose')

app.listen(PORT, () => {
  console.log(`Express is runnnig on http://localhost:${PORT}`)
})