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
            return $.ajax(`http://localhost:8088/reviews/?park_name=${parkName}`)
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
    },
    deleteReview: {
        value: function (id) {
            return $.ajax({
                url: `http://localhost:8088/reviews/${id}`,
                method: "DELETE"
            })
        }
    },
    updateReviews: {
        value: function (id, Review) {
            return $.ajax({
                url: `http://localhost:8088/reviews/${id}`,
                method: "PUT",
                data: Review
            })
        }
    }
})

module.exports = reviewManager