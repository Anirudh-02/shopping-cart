const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: process.env.FRONT_END_URL
}))

app.use('/', express.static(__dirname + '/public'))
app.use('/api', require('./route/api'))

app.listen(PORT, () => {
    console.log('Server started at http://localhost:4789');
})