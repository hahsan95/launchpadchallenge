const Sequelize = require('sequelize')
const db = require('../db')

const VuePR = db.define('vuepr', {
  ownerLogin: {
    type: Sequelize.STRING,
    allowNull: false
  },
  forkId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

module.exports = VuePR
