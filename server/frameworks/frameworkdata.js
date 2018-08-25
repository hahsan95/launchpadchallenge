const axios = require('axios')
const AngularCommit = require('../db/models/angularcommit')
const AngularFork = require('../db/models/angularfork')
const AngularPR = require('../db/models/angularpullrequest')
const EmberCommit = require('../db/models/embercommit')
const EmberFork = require('../db/models/emberfork')
const EmberPR = require('../db/models/emberpullrequest')
const ReactCommit = require('../db/models/reactcommit')
const ReactFork = require('../db/models/reactfork')
const ReactPR = require('../db/models/reactpullrequest')
const VueCommit = require('../db/models/vuecommit')
const VueFork = require('../db/models/vuefork')
const VuePR = require('../db/models/vuepullrequest')

let getInitialFrameworkData = async (framework) => {
  let forkResponses = await axios.get(`https://api.github.com/repos/${framework}/forks`)
  let commitResponses = await axios.get(`https://api.github.com/repos/${framework}/commits`)
  let prResponses = await axios.get(`https://api.github.com/repos/${framework}/pulls`)
  try {
    for(let i = 0; i < 30; i++){
      let forkDate = forkResponses.data[i].created_at
      let forkUSN = forkResponses.data[i].owner.login

      let commitDate = commitResponses.data[i].commit.author.date
      let commitUSN

      let prDate = prResponses.data[i].created_at
      let prUSN
    }
  }
  catch (err) {
    console.error('caught an error', err)
  }
}

let functionRunner = () => {
  let frameworkData = {
    Angular: ['angular/angular.js', 'AngularCommit', 'AngularFork', 'AngularPR'],
    React: ['facebook/react', 'ReactCommit', 'ReactFork', 'ReactPR'],
    Ember: ['emberjs/ember.js', 'EmberCommit', 'EmberFork', 'EmberPR'],
    Vue: ['vuejs/vue', 'VueCommit', 'VueFork', 'VuePR']
  }
  for (let property in frameworkData) {
    getInitialFrameworkData(frameworkData[property][0])
  }
}

setInterval(functionRunner, 3000)
