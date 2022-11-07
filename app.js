const express = require('express')
const app = express()
const routes = require('./routes')
const exphbs = require('express-handlebars')
const PORT = 3000
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(routes)
require('./config/mongoose')

app.listen(PORT, () => {
  console.log(`Express is runnnig on http://localhost:${PORT}`)
})