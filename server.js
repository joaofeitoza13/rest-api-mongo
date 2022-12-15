require('./server/infra/database')
const express = require('express')
const env = require('dotenv').config()

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use('/', require('./server/routes/personRoutes'))

server.listen(env.parsed.PORT, () => console.log("Running at port 3333."))
