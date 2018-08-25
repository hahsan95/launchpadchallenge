const User = require('./user')
const Framework = require('./framework')
const Vote = require('./votes')
const AngularCommit = require('./angularcommit')
const AngularFork = require('./angularfork')
const AngularPR = require('./angularpullrequest')
const EmberCommit = require('./embercommit')
const EmberFork = require('./emberfork')
const EmberPR = require('./emberpullrequest')
const ReactCommit = require('./reactcommit')
const ReactFork = require('./reactfork')
const ReactPR = require('./reactpullrequest')
const VueCommit = require('./vuecommit')
const VueFork = require('./vuefork')
const VuePR = require('./vuepullrequest')
const functionRunner = require('../../frameworks/frameworkdata')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

 User.hasOne(Vote)
 Vote.belongsTo(Framework)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Framework,
  Vote,
  AngularCommit,
  AngularFork,
  AngularPR,
  EmberCommit,
  EmberFork,
  EmberPR,
  ReactCommit,
  ReactFork,
  ReactPR,
  VueCommit,
  VueFork,
  VuePR,
  functionRunner
}
