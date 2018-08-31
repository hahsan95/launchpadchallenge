const router = require('express').Router()

const { VueCommit, VueFork, VuePR } = require('../db/models')

const Sequelize = require('sequelize')
const Op = Sequelize.Op

//Forks in last day

router.get('/Vueforks', async (req, res, next) => {
  try {
    let VueForks = await VueFork.findAll({
      attributes: ['date', 'ownerLogin'],
      where: {
        date: {
          [Op.lt]: new Date(),
          [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000)
        }
      }
    })
    res.json(VueForks)
  } catch (err) {
    console.error(err)
  }
})


//Commits in last month

router.get('/Vuecommits', async (req, res, next) => {
  try {
    let VueCommits = await VueCommit.findAll({
      attributes: ['date', 'ownerLogin'],
      where: {
        date: {
          [Op.lt]: new Date(),
          [Op.gt]: new Date(new Date() - 30 * 24 * 60 * 60 * 1000)
        }
      }
    })
    res.json(VueCommits)
  } catch (err) {
    console.error(err)
  }
})

//Pull Requests in past 6 months

router.get('/Vueprs', async (req, res, next) => {
  try {
    let VuePRs = await VuePR.findAll({
      attributes: ['date', 'ownerLogin'],
      where: {
        date: {
          [Op.lt]: new Date(),
          [Op.gt]: new Date(new Date() - 6 * 30 * 24 * 60 * 60 * 1000)
        }
      }
    })
    res.json(VuePRs)
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
