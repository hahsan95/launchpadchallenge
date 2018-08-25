const axios = require('axios')
const Framework = require('../db/models/framework')

let frameworkURLs = {
  Angular: 'angular/angular.js',
  React: 'facebook/react',
  Ember: 'emberjs/ember.js',
  Vue: 'vuejs/vue'
}

let getFrameworkData = async (framework) => {
  let forkResponses = await axios.get(`https://api.github.com/repos/${framework}/forks`)
  let commitResponses = await axios.get(`https://api.github.com/repos/${framework}/commits`)
  let prResponses = await axios.get(`https://api.github.com/repos/${framework}/pulls`)



  try {
    for(let i = 0; i < 30; i++){
      // console.log(`fork ${i+1}:`, forkResponses.data[i].created_at)
      // console.log(`commit ${i+1}:`, commitResponses.data[i].commit.author.date)
      // console.log(`pull request ${i+1}:`, prResponses.data[i].created_at)
    }
  }
  catch (err) {
    console.error('caught an error', err)
  }
}

let functionRunner = (object) => {
  // for (let property in object) {
  //   getFrameworkData(object[property])
  //   console.log(property)
  // }
  let currentTime = new Date()
  console.log(currentTime.getDate())
}

functionRunner()
// setInterval(functionRunner(frameworkURLs), 3000)
