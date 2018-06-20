const $ = require("jquery");
const parksManager = require("./parksManager");
const homePage = require("./homePage");
const reviewManager = require("./reviewManager");
const userManager = require("./userManager");
const submitReview = require("./submitReview");
const monthOfYear = require("./month");



reviewPage = (currentPark) => {
//    Ajax call to get all parks then make a div of the current park selected
    parksManager.getAllParks().then(parks =>
    parks.forEach((park, index) => {
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
                    let reviewId = parseInt(review.userId)
    // Ajax call to check all users to see if user id matches review userId
            if (currentPark === review.park_name && user.id === reviewId) {

                const date = new Date(review.timeStamp);
                let month = date.getMonth();
                month = monthOfYear(month);
                const day =   date.getDate();
                const year =  date.getFullYear();
                const currentReview =
                 `<div id="currentReviews">
                    <h3>${user.username} ${month}, ${day} ${year}</h3>
                    <p>${review.rating} Stars</p>
                    <p>${review.title}</p>
                    <p>${review.comments}</p>
                 </div>`
            $("#reviews").append(currentReview)
            }}))}))

            // On click of review button div opens to write review of current park
        $("#reviewButton").on("click", function () {
            console.log("review clicked")
            submitReview(park.park_name, index)
        })
        }
}))
}

module.exports = reviewPage






