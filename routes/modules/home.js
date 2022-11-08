const express = require('express')
const router = express.Router()
const Record = require('../../models/record')

router.get('/', (req, res) => {
  const userId = req.user._id
  let totalAmount = 0
  Record.find({ userId })
    .lean()
    .then(expenses => {
      expenses.forEach(expense => {
        totalAmount += expense.amount
      })
      res.render('index', { expenses, totalAmount })
    })
    .catch((error) => console.log(error))
})

module.exports = router