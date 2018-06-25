const $ = require("jquery");
const parksManager = require("./parksManager");
const homePage = require("./homePage");
const reviewManager = require("./reviewManager");
const userManager = require("./userManager");
const submitReview = require("./submitReview");
const monthOfYear = require("./month");
const stars = require("./stars");
const avgRating = require("./avgRating");



reviewPage = (currentPark) => {
    // avgRating(currentPark)
//    Ajax call to get all parks then make a div of the current park selected
    parksManager.getAllParks().then(parks =>
    parks.forEach((park, index) => {
        if (park.park_name === currentPark){
            const currentParkDiv =
                 `<div>
                    <h1>${park.park_name}</h1>
                    <h2>Year Established ${park.year_established}</h2>
                    <h2>${park.acres} Acres</h2>
                    <p>${park.mapped_location_address}</p>
                    <p>${park.mapped_location_city}, ${park.mapped_location_state}</p>
                    <p><button id="reviewButton">Write Review</button></p>
                 </div>`

// Append div of current park to review page
             $("#ReviewPage").append(currentParkDiv)


// Make div to write review of current park

 // Make ajax call to get reviews of current park and display in #reviews div
        // let ratings = 0;
        // let numOfRatings = 0;
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
                // let starAverage = avgRating(review.park_name)

                // ratings+= parseInt(review.rating)
                // numOfRatings++
                //    console.log(ratings)
                // console.log(numOfRatings)

                 const currentReview =
                 `<div id="currentReviews">
                    <h3>${user.username} ${month}, ${day} ${year}</h3>
                    <p>${review.rating} Stars ${reviewStars}</span></p>
                    <p>${review.title}</p>
                    <p>${review.comments}</p>
                 </div>`
                //  let avgStars = (ratings/numOfRatings)
                //  avgStars= avgStars.toFixed(1);
                //  const parkDivInfo = `
                //          <div>${avgStars}</div>`
                //          $("#parkInfo").append(parkDivInfo)


            $("#reviews").append(currentReview)
        }}))}))



            // On click of review button div opens to write review of current park
        $("#reviewButton").on("click", function () {
            console.log("review clicked")
            $("#reviewRating").empty()
            submitReview(park.park_name, index)
        })
        }
}))

}

module.exports = reviewPage






