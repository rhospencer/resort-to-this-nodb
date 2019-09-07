require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT} = process.env
const resortCtrl = require('./controllers/resortCtrl')
const weatherCtrl = require('./controllers/weatherCtrl')

app.use(express.json())

// Endpoints

app.get('/api/resorts', resortCtrl.getResorts)

app.post('/api/resorts', resortCtrl.createResort)

app.put('/api/resorts/:id', resortCtrl.editResort)

app.delete('/api/resorts/:id', resortCtrl.deleteResort)

app.get(`/api/weather`, weatherCtrl.getWeather)










app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))