require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT} = process.env
const resortCtrl = require('./controllers/resortCtrl')
// const resortCtrl = require('./controllers/resortCtrl')

app.use(express.json())

// Endpoints

app.get('/api/resorts', resortCtrl.getResorts)

app.post('/api/resorts', resortCtrl.createResort)










app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))