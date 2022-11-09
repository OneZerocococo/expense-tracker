const bcrypt = require('bcryptjs')
const Record = require('../record')
const User = require('../user')
const recordList = require('../seeds/record.json').results
const userList = require('../seeds/user.json').results
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('Start writing user and record seeds...')
  Promise.all(
    userList.map(user => {
      const { name, email, password, recordIndex } = user
      return User.create({
        name,
        email,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
      })
        .then(user => {
          const records = recordIndex.map(index => {
            const record = recordList[index]
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