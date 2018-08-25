const Sequelize = require('sequelize')
const db = require('../db')

const EmberFork = db.define('emberfork', {
  ownerLogin: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

module.exports = EmberFork
