const handlebars = require('handlebars')
const Category = require('../models/category')

const showIcon = handlebars.registerHelper('showIcon', function (num) {
  console.log('helper running..')
  const icon = Category.findOne({ id: num }).lean().then(category => {
    console.log(category.icon)
    return category.icon
  })
  return icon
})

module.exports = showIcon