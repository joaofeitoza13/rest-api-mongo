const mongoose = require('mongoose')
const env = require('dotenv').config()

mongoose.set('strictQuery', false)

mongoose.connect('mongodb://127.0.0.1:27017/personAPI', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB.'))
.catch(error => console.log('Unable to connect to MongoDB', error))
