const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const text1 = 'Hey'
  const text2 = 'Participants!'
  res.send(`${text1} ${text2}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})