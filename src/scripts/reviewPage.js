const $ = require("jquery");
const parksManager = require("./parksManager");
const homePage = require("./homePage");
const reviewManager = require("./reviewManager");


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
                   <p><input type="text" placeholder="Title"></input></p>
                   <p><input type="text" placeholder="Comments"></input></p>
                   <p><button id="submitReviewButton">Submit Review</button></p>
                </div>`
 // On click of review button div opens to write review of current park
        $("#reviewButton").on("click", function () {
            $("#reviewRating").append(reviewDiv)
        })
    // Make ajax call to get reviews of current park and display in #reviews div
        reviewManager.getAllReviews().then(reviews =>
        reviews.forEach(review => {
            if (currentPark === review.park_name){
                const currentReview =
                 `<div id="currentReviews">
                    <h2>User Name  ${review.date}</h2>
                    <p>${review.rating} Stars</p>
                    <p>${review.title}</p>
                    <p>${review.comments}</p>
                 </div>`
            $("#reviews").append(currentReview)
            }}))

        }
}))

}

module.exports = reviewPage



