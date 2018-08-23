const axios = require('axios')
const Framework = require('../db/models/framework')

let getReactCommits = async () => {
  let response = await axios.get(`https://api.github.com/repos/facebook/react/commits`)
  try {
    // for(let i = 0; i < messages.length; i++){
    //   let message = messages[i]
    //   Messages.create({
    //     userId: await message.sender_id,
    //     content: await message.text,
    //     likers: await message.favorited_by
    //   })
    console.log(response)
  }
  catch (err) {
    console.error('caught an error', err)
  }
}

getReactCommits()
