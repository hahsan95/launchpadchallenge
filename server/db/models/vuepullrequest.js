const Sequelize = require('sequelize')
const db = require('../db')

const VuePR = db.define('vuepr', {
  ownerLogin: {
    type: Sequelize.STRING,
    allowNull: false
  },
  prId: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

module.exports = VuePR
