const $ = require("jquery")
// const reviewPage = require("./reviewPage");
// const parksManager = require("./parksManager");
// const homePage = require("./homePage");

const reviewManager = Object.create(null, {

    getAllReviews: {
        value: function () {
            return $.ajax("http://localhost:8088/reviews")
        }
    },
    getSingleReview: {
        value: function (parkName) {
            return $.ajax(`http://localhost:8088/reviews?park_name=${parkName}`)
        }
    },


})

module.exports = reviewManager