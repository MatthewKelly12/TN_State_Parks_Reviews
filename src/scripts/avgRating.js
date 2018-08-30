const $ = require("jquery");
const reviewManager = require("./reviewManager");
const stars = require("./stars");

// Calculates the average rating of reviews on park
// and uses stars() function to convert rating to stars
avgRating = (parkName) => {
	// empty div first to update info
	$("#avgStars").empty();
            let ratings = 0;
            let numOfRatings = 0;
            let nonRatings = 0;
    reviewManager.getAllReviews(parkName).then(reviews =>
        reviews.forEach((review, index) => {
           if (review.park_name === parkName) {
        		ratings+= parseInt(review.rating)
               	numOfRatings++;
               	nonRatings = reviews.length - numOfRatings;
            	let avgStars = (ratings/numOfRatings)
				avgStars = avgStars.toFixed(1);

				// converts rating to stars img icon
				let ratingStars = stars(Math.floor(avgStars))

				// builds div to show avg rating and stars
				const parkDivInfo = `
                        <div><h3>${ratingStars}  Avg Stars ${avgStars}</h3></div>`
                    	$("#avgStars").html(parkDivInfo)
           }
        })
    )
}

module.exports = avgRating