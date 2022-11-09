const handlebars = require('handlebars')
const Category = require('../models/category')

const showIcon = handlebars.registerHelper('showIcon', function (num) {
  Category.findOne({ id: num }, (err, category) => {
    return category.icon
  })
})
module.exports = showIcon