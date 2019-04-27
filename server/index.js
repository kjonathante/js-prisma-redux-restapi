const { prisma } = require('./generated/prisma-client')
const express = require('express')
const app = express()

app.use(express.json())



app.get('/messages', async (req, res) => {
  const messages = await prisma.messages()
  res.json(messages)
})

app.get('/message/:id', async (req, res) => {
  const message = await prisma.message({id:req.params.id})
  res.json(message)
})

app.post('/message', async (req, res) => {
  const newMessage = await prisma.createMessage(req.body)
  res.json(newMessage)
})

app.put('/message/:id', async (req, res) => {
  const message = await prisma.updateMessage({
    where: {id:req.params.id},
    data: req.body
  })
  res.json(message)
})

app.delete('/message/:id', async (req, res) => {
  const message = await prisma.deleteMessage({id:req.params.id})
  res.json(message)
})

app.listen(3000, () =>
  console.log('Server is running on http://localhost:3000'),
)
/*

curl http://localhost:3000/

curl -X POST \
  http://localhost:3000/message \
  -H 'Content-Type: application/json' \
  -d '{
  "message": "This is a message."
}'

curl -X PUT \
  http://localhost:3000/message/cjuz337r00015070135e9jupk \
  -H 'Content-Type: application/json' \
  -d '{
  "message": "Change this message."
}'

curl -X DELETE \
  http://localhost:3000/message/cjuz337r00015070135e9jupk
*/