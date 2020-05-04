const PORT = 8080

const express = require('express')
const app = express()

const router = require('./routes')

app.set('view engine', 'ejs')

app.use('/', router)

app.listen(process.env.PORT || PORT, () => {
  console.log('Listening on ' + String(process.env.PORT || PORT))
})
