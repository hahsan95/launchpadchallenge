const Sequelize = require('sequelize')
const db = require('../db')

const VueFork = db.define('vuefork', {
  ownerLogin: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

module.exports = VueFork
