const express = require('express')
const router = express.Router()

router.get('/:id/new', (req, res) => {
  res.render('new')
})
router.get('/:id/edit', (req, res) => {
  res.render('edit')
})

module.exports = router