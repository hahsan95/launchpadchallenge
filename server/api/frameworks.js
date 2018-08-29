const router = require('express').Router()
const {Framework} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    let frameworks = await Framework.findAll({
      attributes: ['id', 'name', 'votes']
    })
    res.json(frameworks)
  } catch (err) {
    console.error(err)
  }
})

router.put('/vote/:frameworkId', async (req, res, next) => {
  try {
    let vote = await Framework.increment('votes', {
      where: {
        id: req.params.frameworkId
      }
    })
    res.json(vote)
  } catch(err) {
    next(err)
  }
})

router.put('/unvote/:frameworkId', async (req, res, next) => {
  try {
    let vote = await Framework.decrement('votes', {
      where: {
        id: req.params.frameworkId
      }
    })
    res.json(vote)
  } catch(err) {
    next(err)
  }
})
