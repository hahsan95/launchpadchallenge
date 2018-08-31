const router = require('express').Router()

const { EmberCommit, EmberFork, EmberPR } = require('../db/models')

const Sequelize = require('sequelize')
const Op = Sequelize.Op

//Forks in last day

router.get('/Emberforks', async (req, res, next) => {
  try {
    let EmberForks = await EmberFork.findAll({
      attributes: ['date', 'ownerLogin'],
      where: {
        date: {
          [Op.lt]: new Date(),
          [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000)
        }
      }
    })
    res.json(EmberForks)
  } catch (err) {
    console.error(err)
  }
})


//Commits in last month

router.get('/Embercommits', async (req, res, next) => {
  try {
    let EmberCommits = await EmberCommit.findAll({
      attributes: ['date', 'ownerLogin'],
      where: {
        date: {
          [Op.lt]: new Date(),
          [Op.gt]: new Date(new Date() - 30 * 24 * 60 * 60 * 1000)
        }
      }
    })
    res.json(EmberCommits)
  } catch (err) {
    console.error(err)
  }
})

//Pull Requests in past 6 months

router.get('/Emberprs', async (req, res, next) => {
  try {
    let EmberPRs = await EmberPR.findAll({
      attributes: ['date', 'ownerLogin'],
      where: {
        date: {
          [Op.lt]: new Date(),
          [Op.gt]: new Date(new Date() - 6 * 30 * 24 * 60 * 60 * 1000)
        }
      }
    })
    res.json(EmberPRs)
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
