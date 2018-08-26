const Sequelize = require('sequelize')
const db = require('../db')

const ReactCommit = db.define('reactcommit', {
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

module.exports = ReactCommit
