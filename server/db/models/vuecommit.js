const Sequelize = require('sequelize')
const db = require('../db')

const VueCommit = db.define('vuecommit', {
  ownerLogin: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

module.exports = VueCommit
