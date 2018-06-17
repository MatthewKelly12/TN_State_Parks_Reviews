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
    createReview: {
        value: function (reviewInfo) {
            return $.ajax({
                url: "http://localhost:8088/reviews",
                method: "POST",
                data: reviewInfo
            })
        }
    }


})

module.exports = reviewManager