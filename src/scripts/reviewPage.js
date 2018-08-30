const $ = require("jquery");
const parksManager = require("./parksManager");
const reviewManager = require("./reviewManager");
const userManager = require("./userManager");
const submitReview = require("./submitReview");
const monthOfYear = require("./month");
const stars = require("./stars");
const avgRating = require("./avgRating");

reviewPage = (currentPark) => {
    clearDetails();
//    Ajax call to get all parks then make a div of the current park selected
    parksManager.getSinglePark(currentPark).then((p) => {
        let park = p[0];
        const currentParkDiv =
                 `<div id="currentPark">
                    <h1>${park.park_name}</h1>
                    <h2>Est. ${park.year_established}</h2>
                    <h2>${park.acres} Acres</h2>
                    <p class="parkAddress">${park.mapped_location_address}</p>
                    <p class="parkAddress">${park.mapped_location_city}, ${park.mapped_location_state}</p>
                    <p class="parkAddress"><button id="reviewButton">Write Review</button></p>
				          </div>`


        const parkPhoto = `
        	<img src="./images/park-16.png" height="400" width="450" class"optionImg">`
            $("#parkPhoto").append(parkPhoto)
			      // Append div of current park to review page
            $("#ReviewPage").append(currentParkDiv)
      
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
                const day = date.getDate();
                const year =  date.getFullYear();
                let reviewStars = undefined;
                reviewStars = stars(parseInt(review.rating));
                 const currentReview =
                //  ${review.rating} Stars
                 `<div id="currentReviews">
                    <h2>${user.username}     ${reviewStars}</h2>
                    <p>${month}, ${day} ${year}</p>
                    <p>${review.title}</p>
                    <p>${review.comments}</p>
                 </div>`
                $("#reviews").append(currentReview)
        }}))}))

        // On click of review button div opens to write review of current park
        $("#reviewButton").on("click", function () {
            $("#reviewRating").empty()
            submitReview(park.park_name)
        })
    })
}

module.exports = reviewPage