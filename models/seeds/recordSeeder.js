const bcrypt = require('bcryptjs')
const Record = require('../record')
const User = require('../user')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const SEED_RECORD = require('../seeds/record.json').results
const SEED_USER = require('../seeds/user.json').results
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('Start writing user and record seeds...')
  Promise.all(
    SEED_USER.map(user => {
      const { name, email, password, recordIndex } = user
      return User.create({
        name,
        email,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
      })
        .then(user => {
          const records = recordIndex.map(index => {
            const record = SEED_RECORD[index]
            record.userId = user._id
            return record
          })
          return Record.create(records)
        })
    })
  )
    .then(() => {
      console.log('Record seeder done')
      process.exit()
    })
    .catch(err => console.log(err))
})