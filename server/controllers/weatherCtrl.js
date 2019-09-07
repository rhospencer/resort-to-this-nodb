require('dotenv').config()
const {API_KEY} = process.env
const axios = require('axios')


module.exports = {
    getWeather: (req, res, next) => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${req.query.zip}&APPID=${API_KEY}&units=imperial`)
        .then(result => {
            res.status(200).send(result.data.list)
        })
    }
}