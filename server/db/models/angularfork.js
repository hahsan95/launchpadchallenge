const Sequelize = require('sequelize')
const db = require('../db')

const AngularFork = db.define('angularfork', {
  ownerLogin: {
    type: Sequelize.STRING,
    allowNull: false
  },
  forkId: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

module.exports = AngularFork
