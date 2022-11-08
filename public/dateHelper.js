const handlebars = require('handlebars')
const dateFormat = handlebars.registerHelper('dateFormat', function (date) {
  const d = new Date(date)
  dataValues = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
  return dataValues.join('/')
})

module.exports = dateFormat