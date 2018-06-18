const $ = require("jquery");
const parksManager = require("./parksManager");
const homePage = require("./homePage");
const reviewManager = require("./reviewManager");
const userManager = require("./userManager");



reviewPage = (currentPark) => {
//    Ajax call to get all parks then make a div of the current park selected
    parksManager.getAllParks().then(parks =>
    parks.forEach(park => {
        if (park.park_name === currentPark){
            const currentParkDiv =
                 `<div>
                    <h2>${park.park_name}</h2>
                    <p>${park.mapped_location_address}</p>
                    <p>${park.mapped_location_city}, ${park.mapped_location_state}</p>
                    <p><button id="reviewButton">Write Review</button></p>
                 </div>`
// Append div of current park to review page
             $("#ReviewPage").append(currentParkDiv)

// Make div to write review of current park

 // Make ajax call to get reviews of current park and display in #reviews div

    reviewManager.getAllReviews().then(reviews =>
        reviews.forEach(review => {
              userManager.getAllUsers().then(users =>
                users.forEach(user => {
    // Ajax call to check all users to see if user id matches review userId
            if (currentPark === review.park_name && user.id === review.userId) {
                const currentReview =
                 `<div id="currentReviews">
                    <h2>${user.username} ${review.timeStamp}</h2>
                    <p>${review.rating} Stars</p>
                    <p>${review.title}</p>
                    <p>${review.comments}</p>
                 </div>`
            $("#reviews").append(currentReview)
            }}))}))
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

            // On click of review button div opens to write review of current park
        $("#reviewButton").on("click", function () {
            $("#reviewRating").append(reviewDiv)
        })

        // $("#submitReviewButton").on("click", function () {
        //     debugger
        //     console.log("fired")
        // let activeUser = (sessionStorage.getItem("ActiveUser"))
        //      console.log(activeUser)
        // let reviewInfo = {
        //     park_name: park.park_name,
        //     userId: activeUser,
        //     rating: $("#rating").val(),
        //     title: $("#reviewTitle").val(),
        //     comments: $("#reviewComments").val(),
        //     timeStamp: new Date()
        // }
        // console.log(reviewInfo)
            // reviewManager.createReview(reviewInfo);
        // })
        }
}))
}

module.exports = reviewPage






