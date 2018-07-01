const $ = require("jquery");
const reviewManager = require("./reviewManager");
const activeUser = require("./activeUser");
const avgRating = require("./avgRating");

submitReview = (parkName) =>{
        const reviewDiv =
                `<div>
                   <h2>Please Rate
                    <select id="rating">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select></h2>
                   <p><input id="reviewTitle" type="text" placeholder="Title"></input></p>
                   <p><input id="reviewComments" type="text" placeholder="Comments"></input></p>
                   <p><button id="submitReviewButton">Submit Review</button></p>
                </div>`
    $("#reviewRating").append(reviewDiv)
    $("#reviewRating").show()

    $("#submitReviewButton").on("click", function () {
        let user = (activeUser.getActiveUser())
             console.log(user.id)
        let reviewInfo = {
            park_name: parkName,
            userId: user.id,
            rating: $("#rating").val(),
            title: $("#reviewTitle").val(),
            comments: $("#reviewComments").val(),
            timeStamp: new Date()
        }
            console.log(reviewInfo)
            reviewManager.createReview(reviewInfo);
            $("#reviewRating").empty()
            $("#reviewRating").hide()
            $("#ReviewPage").empty()
            $("#reviews").empty()
            reviewPage(parkName)
            avgRating(parkName)
            parksInformation(parkName)
         })
}

module.exports = submitReview