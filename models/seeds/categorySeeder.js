if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Category = require('../category')
const categoryList = require('../seeds/category.json').results
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('Start writing category seed...')
  Category.insertMany(categoryList)
    .then(() => {
      console.log('Category seeder done')
    })
    .catch(err => console.log(err))
})