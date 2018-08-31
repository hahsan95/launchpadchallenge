const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'hasVoted', 'hasVotedReact', 'hasVotedAngular', 'hasVotedEmber', 'hasVotedVue']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/me', async (req, res, next) => {
  try {
    let myId = req.user.id
    const me = await User.findAll({
      attributes: ['id', 'email', 'hasVoted', 'hasVotedReact', 'hasVotedAngular', 'hasVotedEmber', 'hasVotedVue'],
      where: {
        id: myId
      }
    })
    res.json(me)
  } catch (err) {
    next(err)
  }
})

router.put('/votereact', async (req, res, next) => {
  try {
    let myId = req.user.id
    const vote = await User.update({
      hasVoted: true,
      hasVotedReact: true,
      hasVotedAngular: false,
      hasVotedEmber: false,
      hasVotedVue: false
    }, {
      where: {
        id: myId
      }
    })
    res.json(vote)
  } catch (err) {
    next(err)
  }
})

router.put('/voteangular', async (req, res, next) => {
  try {
    let myId = req.user.id
    const vote = await User.update({
      hasVoted: true,
      hasVotedReact: false,
      hasVotedAngular: true,
      hasVotedEmber: false,
      hasVotedVue: false
    }, {
      where: {
        id: myId
      }
    })
    res.json(vote)
  } catch (err) {
    next(err)
  }
})

router.put('/voteember', async (req, res, next) => {
  try {
    let myId = req.user.id
    const vote = await User.update({
      hasVoted: true,
      hasVotedReact: false,
      hasVotedAngular: false,
      hasVotedEmber: true,
      hasVotedVue: false
    }, {
      where: {
        id: myId
      }
    })
    res.json(vote)
  } catch (err) {
    next(err)
  }
})

router.put('/votevue', async (req, res, next) => {
  try {
    let myId = req.user.id
    const vote = await User.update({
      hasVoted: true,
      hasVotedReact: false,
      hasVotedAngular: false,
      hasVotedEmber: false,
      hasVotedVue: true
    }, {
      where: {
        id: myId
      }
    })
    res.json(vote)
  } catch (err) {
    next(err)
  }
})

router.put('/unvote', async (req, res, next) => {
  try {
    let myId = req.user.id
    const vote = await User.update({
      hasVoted: false,
      hasVotedReact: false,
      hasVotedAngular: false,
      hasVotedEmber: false,
      hasVotedVue: false
    }, {
      where: {
        id: myId
      }
    })
    res.json(vote)
  } catch (err) {
    next(err)
  }
})
