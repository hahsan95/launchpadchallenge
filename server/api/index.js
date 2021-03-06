const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/frameworks', require('./frameworks'))
router.use('/angulardata', require('./angulardata'))
router.use('/reactdata', require('./reactdata'))
router.use('/vuedata', require('./vuedata'))
router.use('/emberdata', require('./emberdata'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
