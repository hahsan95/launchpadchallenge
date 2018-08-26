const Sequelize = require('sequelize')
const db = require('../db')

const EmberCommit = db.define('embercommit', {
  ownerLogin: {
    type: Sequelize.STRING,
    allowNull: false
  },
  commitId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

module.exports = EmberCommit
