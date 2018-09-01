'use strict'

const db = require('../server/db')
const {User, Framework} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'}),
    User.create({email: 'homum@email.com', password: '123'}),
    User.create({email: 'brendan@email.com', password: '123'})
  ])

  const frameworks = await Promise.all([
    Framework.create({id: 1, name: 'React', votes: 17}),
    Framework.create({id: 2, name: 'Angular', votes: 12}),
    Framework.create({id: 3, name: 'Ember', votes: 6}),
    Framework.create({id: 4, name: 'Vue', votes: 2})
  ])

  console.log(`seeded ${users.length} users!`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
