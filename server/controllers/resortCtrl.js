const resorts = require('../resortList')


let id = 5
module.exports = {

    createResort: (req, res, next) => {
        let newResort = {
            id: id,
            name: req.body.name,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            zip: req.body.zip,
            openingDate: req.body.openingDate,
            liftsOpen: req.body.liftsOpen,
            totalLifts: req.body.totalLifts,
            trailsOpen: req.body.trailsOpen,
            totalTrails: req.body.totalTrails,
            parksOpen: req.body.parksOpen,
            totalParks: req.body.totalParks

        }
        resorts.push(newResort)
        id++

        res.status(200).send(resorts)
    },

    getResorts: (req, res, next) => {
        res.status(200).send(resorts)
    }
}