const resorts = require('../resortList')


let id = 5
module.exports = {

    createResort: (req, res, next) => {
        let newResort = {

        }
    },

    getResorts: (req, res, next) => {
        res.status(200).send(resorts)
    }
}