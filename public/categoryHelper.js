const handlebars = require('handlebars')
const Category = require('../models/category')
const categoryArr = []
Category.find()
  .lean()
  .then(category => categoryArr.push(...category))

const showIcon = handlebars.registerHelper('showIcon', function (num) {
  const iconChoosen = categoryArr.find(data => data.id === num)
  return iconChoosen.icon
})
module.exports = showIcon