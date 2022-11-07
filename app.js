const express = require('express')
const app = express()
const routes = require('./routes')
const exphbs = require('express-handlebars')
const session = require('express-session')
const { urlencoded } = require('express')
const PORT = 3000
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
require('./config/mongoose')

// setting template engine
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
// setting body parser
app.use(express.urlencoded({ extended: true }))
// setting static files
app.use(express.static('public'))
// setting express-session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))
app.use(routes)


app.listen(PORT, () => {
  console.log(`Express is runnnig on http://localhost:${PORT}`)
})