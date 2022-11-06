const express = require('express')
const app = express()
const routes = require('./routes')
const PORT = 3000

app.use(routes)


app.listen(PORT, () => {
  console.log(`Express is runnnig on http://localhost:${PORT}`)
})