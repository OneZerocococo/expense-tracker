const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

router.get('/new', (req, res) => {
  Category.find()
    .lean()
    .then(categories => {
      res.render('new', { categories })
    })
    .catch(err => console.log(err))
})

router.post('/', (req, res) => {
  const userId = req.user._id
  req.body.userId = userId
  Record.create(req.body)
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

router.get('/:id/edit', (req, res, next) => {
  const userId = req.user._id
  const _id = req.params.id
  const Categories = []
  Category.find()
    .lean()
    .then(categories => {
      return Promise.all([categories, Record.findOne({ _id, userId }).lean()])
    })
    .then(([categories, expense]) => {
      Categories.push(...categories)
      Categories.forEach(category => {
        if (category.id === expense.category) {
          category.selected = true
        }
      })
      return res.render('edit', { expense, categories: Categories })
    })
    .catch(next)
})

router.put('/:id', (req, res) => {
  const _id = req.params.id
  const { name, date, category, amount } = req.body
  const userId = req.user._id
  Record.findByIdAndUpdate({ _id, userId }, { name, date, category, amount })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

router.delete('/:id', (req, res) => {
  const _id = req.params.id
  const userId = req.user._id
  return Record.findOne({ _id, userId })
    .then((expense) => expense.remove())
    .then(() => res.redirect('/'))
    .catch((err) => console.log(err))
})

module.exports = router