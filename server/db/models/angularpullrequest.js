const Sequelize = require('sequelize')
const db = require('../db')

const AngularPR = db.define('angularpr', {
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

module.exports = AngularPR
