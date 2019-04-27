const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {

  // Create a new user called `Alice`
  const message = await prisma.createMessage({ message: 'Message One' })
  console.log(`Created new user: ${message.message} (ID: ${message.id})`)

  // Read all users from the database and print them to the console
  const allMessages = await prisma.messages()
  console.log(allMessages)
}

main().catch(e => console.error(e))

/*
// Fetch single user
const user = await prisma.user({ id: '__USER_ID__' })
// Filter user list
const usersCalledAlice = await prisma.users({
  where: { name: 'Alice' }
})
// Update a user's name
const updatedUser = await prisma.updateUser({
  where: { id: '__USER_ID__' },
  data: { name: 'Bob' }
})
// Delete user
const deletedUser = await prisma.deleteUser({ id: '__USER_ID__' })
*/