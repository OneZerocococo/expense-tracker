const handlebars = require('handlebars')
const dateFormat = handlebars.registerHelper('dateFormat', function (date) {
  const d = new Date(date)
  let dd = String(d.getDate())
  let mm = String(d.getMonth() + 1)
  if (mm.length == 1) {
    mm = '0' + mm
  }
  if (dd.length == 1) {
    dd = '0' + dd
  }
  dataValues = [d.getFullYear(), mm, dd]
  return dataValues.join('-')
})

module.exports = dateFormat