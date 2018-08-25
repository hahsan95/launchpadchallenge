const Sequelize = require('sequelize')
const db = require('../db')

const AngularFork = db.define('angularfork', {
  ownerLogin: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

module.exports = AngularFork
