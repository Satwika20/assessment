const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const transactionsRouter = require('./routes/transactions')
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.use('/transactions', transactionsRouter)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
