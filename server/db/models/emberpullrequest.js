const Sequelize = require('sequelize')
const db = require('../db')

const EmberPR = db.define('emberpr', {
  ownerLogin: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

module.exports = EmberPR
