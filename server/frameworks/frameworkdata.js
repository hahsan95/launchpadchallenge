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
  let forkResponses = await axios.get(`https://api.github.com/repos/${framework[0]}/forks`)
  let commitResponses = await axios.get(`https://api.github.com/repos/${framework[0]}/commits`)
  let prResponses = await axios.get(`https://api.github.com/repos/${framework[0]}/pulls`)
  try {
    for(let i = 0; i < 30; i++){
      let commitId = commitResponses.data[i].sha
      let commitDate = commitResponses.data[i].commit.author.date
      let commitUSN = commitResponses.data[i].commit.author.name

      let commitCheck = await framework[1].findOne({
        where: {
          commitId: await commitId
        }
      })

      if(!commitCheck){
        await framework[1].create({
          commitId: await commitId,
          ownerLogin: await commitUSN,
          date: await commitDate
        })
      }


      let forkId = forkResponses.data[i].id
      let forkDate = forkResponses.data[i].created_at
      let forkUSN = forkResponses.data[i].owner.login

      let forkCheck =  await framework[2].findOne({
        where: {
          forkId: await forkId
        }
      })

      if(!forkCheck){
        await framework[2].create({
          commitId: await forkId,
          ownerLogin: await forkUSN,
          date: await forkDate
        })
      }


      let prId = prResponses.data[i].id
      let prDate = prResponses.data[i].created_at
      let prUSN = prResponses.data[i].user.login

      let prCheck =  await framework[3].findOne({
        where: {
          prId: await prId
        }
      })

      if(!prCheck){
        await framework[3].create({
          prId: await prId,
          ownerLogin: await prUSN,
          date: await prDate
        })
      } else {
        console.log('already in DB')
      }
    }
  }
  catch (err) {
    console.error('caught an error', err)
  }
}

let functionRunner = async () => {
  let frameworkData = {
    Angular: ['angular/angular.js', AngularCommit, AngularFork, AngularPR],
    React: ['facebook/react', ReactCommit, ReactFork, ReactPR],
    Ember: ['emberjs/ember.js', EmberCommit, EmberFork, EmberPR],
    Vue: ['vuejs/vue', VueCommit, VueFork, VuePR]
  }
  for (let property in frameworkData) {
    getInitialFrameworkData(frameworkData[property])
    // frameworkData[property][1].create({
    //   ownerLogin: await 'poop'
    // })
  }
}

setInterval(functionRunner, 6000)
