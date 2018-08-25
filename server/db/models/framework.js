const Sequelize = require('sequelize')
const db = require('../db')

const Framework = db.define('framework', {
  name: {
    type: Sequelize.STRING
  },
  votes: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})


module.exports = Framework
