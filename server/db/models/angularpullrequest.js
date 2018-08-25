const Sequelize = require('sequelize')
const db = require('../db')

const AngularPR = db.define('angularpr', {
  ownerLogin: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

module.exports = AngularPR
