const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

router.get('/', (req, res) => {
  const userId = req.user._id
  const categoryId = Number(req.query.categorySelector)
  const categories = []
  // 先render所有類別的花費，若有切換selector再依照類別顯示...
  Category.find()
    .lean()
    .then(category => categories.push(...category))
    .then(() => {
      if (!categoryId) {
        Record.find({ userId })
          .lean()
          .sort({ date: 'desc' })
          .then(expenses => {
            let totalAmount = 0
            categories.forEach(category => {
              if (category.id === categoryId) {
                category.selected = true
              }
            })
            expenses.forEach(expense => {
              totalAmount += expense.amount
            })
            return res.render('index', { categories, expenses, totalAmount })
          })
      } else {
        // specific category
        Record.find({ userId, category: categoryId })
          .lean()
          .sort({ date: 'desc' })
          .then(expenses => {
            let totalAmount = 0
            categories.forEach(category => {
              if (category.id === categoryId) {
                category.selected = true
              }
            })
            expenses.forEach(expense => {
              totalAmount += expense.amount
            })
            return res.render('index', { categoryId, categories, expenses, totalAmount })
          })
      }
    })
    .catch((error) => console.log(error))
})

module.exports = router