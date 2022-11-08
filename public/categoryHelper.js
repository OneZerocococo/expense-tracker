const handlebars = require('handlebars')
const Category = require('../models/category')

const showIcon = handlebars.registerHelper('showIcon', function (num) {
  console.log('helper running..')
  Category.findOne({ id: num }, (err, category) => {
    console.log(category.icon)
    return category.icon
  })
})
module.exports = showIcon