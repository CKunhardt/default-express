const PORT = process.env.PORT || 8080

const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const router = require('./routes')

app.set('view engine', 'ejs')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.use('/', router)

app.listen(PORT, () => {
  console.log('Listening on ' + String(PORT))
})
