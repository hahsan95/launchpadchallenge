const Sequelize = require('sequelize')
const db = require('../db')

const AngularCommit = db.define('angularcommit', {
  ownerLogin: {
    type: Sequelize.STRING,
    allowNull: false
  },
  commitId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

module.exports = AngularCommit
