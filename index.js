const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const text = 'Hey Participants!'
  res.send(`${text}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})