const router = require('express').Router()

const { AngularCommit, AngularFork, AngularPR } = require('../db/models')

const Sequelize = require('sequelize')
const Op = Sequelize.Op

//Forks in last day

router.get('/angularforks', async (req, res, next) => {
  try {
    let AngularForks = await AngularFork.findAll({
      attributes: ['date', 'ownerLogin'],
      where: {
        date: {
          [Op.lt]: new Date(),
          [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000)
        }
      }
    })
    res.json(AngularForks)
  } catch (err) {
    console.error(err)
  }
})


//Commits in last month

router.get('/angularcommits', async (req, res, next) => {
  try {
    let AngularCommits = await AngularCommit.findAll({
      attributes: ['date', 'ownerLogin'],
      where: {
        date: {
          [Op.lt]: new Date(),
          [Op.gt]: new Date(new Date() - 30 * 24 * 60 * 60 * 1000)
        }
      }
    })
    res.json(AngularCommits)
  } catch (err) {
    console.error(err)
  }
})

//Pull Requests in past 6 months

router.get('/angularprs', async (req, res, next) => {
  try {
    let AngularPRs = await AngularPR.findAll({
      attributes: ['date', 'ownerLogin'],
      where: {
        date: {
          [Op.lt]: new Date(),
          [Op.gt]: new Date(new Date() - 6 * 30 * 24 * 60 * 60 * 1000)
        }
      }
    })
    res.json(AngularPRs)
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
