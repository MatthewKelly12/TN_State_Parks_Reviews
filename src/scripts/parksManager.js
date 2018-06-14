const $ = require("jquery")

const parksManager = Object.create(null, {

    getAllParks: {
        value: function () {
            return $.ajax("https://data.nashville.gov/resource/xbru-cfzi.json/")
        }
    },
    getSinglePark: {
        value: function (parkName) {
            return $.ajax(`https://data.nashville.gov/resource/xbru-cfzi.json?park_name=${parkName}`)
        }
    },


})

module.exports = parksManager