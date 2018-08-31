const router = require('express').Router()

const { ReactCommit, ReactFork, ReactPR } = require('../db/models')

const Sequelize = require('sequelize')
const Op = Sequelize.Op

//Forks in last day

router.get('/Reactforks', async (req, res, next) => {
  try {
    let ReactForks = await ReactFork.findAll({
      attributes: ['date', 'ownerLogin'],
      where: {
        date: {
          [Op.lt]: new Date(),
          [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000)
        }
      }
    })
    res.json(ReactForks)
  } catch (err) {
    console.error(err)
  }
})


//Commits in last month

router.get('/Reactcommits', async (req, res, next) => {
  try {
    let ReactCommits = await ReactCommit.findAll({
      attributes: ['date', 'ownerLogin'],
      where: {
        date: {
          [Op.lt]: new Date(),
          [Op.gt]: new Date(new Date() - 30 * 24 * 60 * 60 * 1000)
        }
      }
    })
    res.json(ReactCommits)
  } catch (err) {
    console.error(err)
  }
})

//Pull Requests in past 6 months

router.get('/Reactprs', async (req, res, next) => {
  try {
    let ReactPRs = await ReactPR.findAll({
      attributes: ['date', 'ownerLogin'],
      where: {
        date: {
          [Op.lt]: new Date(),
          [Op.gt]: new Date(new Date() - 6 * 30 * 24 * 60 * 60 * 1000)
        }
      }
    })
    res.json(ReactPRs)
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
