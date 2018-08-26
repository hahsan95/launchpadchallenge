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
