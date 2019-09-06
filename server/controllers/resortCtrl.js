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
    },

    deleteResort: (req, res, next) => {
        const {id} = req.params
        const index = resorts.findIndex(el => +el.id === +id)
        if (index === -1) {
            res.status(404).send('ID not found.')
        }
        resorts.splice(index, 1)
        res.status(200).send(resorts)
    },

    editResort: (req, res, next) => {
        
    }
}