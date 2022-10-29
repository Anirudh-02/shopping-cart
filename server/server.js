const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/', express.static(__dirname + '/public'))
app.use('/api', require('./route/api'))

app.listen(4789, () => {
    console.log('Server started at http://localhost:4789');
})