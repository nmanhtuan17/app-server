const express = require('express')
const app = express()
const mongoose = require('mongoose')
const initRoute = require('./src/routes/routes.js')
require('dotenv').config()



const port = process.env.PORT || 8080
const URL = process.env.MONGO_URL

mongoose.connect(URL)
    .then(()=> console.log('connect db'))
    .catch((err)=> console.log(err))

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

initRoute(app)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
