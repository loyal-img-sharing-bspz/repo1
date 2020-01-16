require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

app.listen(port, () => console.log(`Express server is running on port ${port}`))

mongoose.connect('mongodb://localhost:27017/temp_db_00', {
   useCreateIndex: true,
   useNewUrlParser: true,
   useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', routes)
app.use(errorHandler)