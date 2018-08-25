const Sequelize = require('sequelize')
const db = require('../db')

const ReactFork = db.define('reactfork', {
  ownerLogin: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

module.exports = ReactFork
