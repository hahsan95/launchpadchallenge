const Sequelize = require('sequelize')
const db = require('../db')

const ReactFork = db.define('reactfork', {
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

module.exports = ReactFork
