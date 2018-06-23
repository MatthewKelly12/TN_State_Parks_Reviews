const $ = require("jquery");
const reviewManager = require("./reviewManager");

avgRating = (parkName) => {
            let ratings = 0;
            let numOfRatings = 0;
    reviewManager.getAllReviews(parkName).then(reviews =>
        reviews.forEach((review, index) => {
           if (review.park_name === parkName) {
                ratings+= parseInt(review.rating)
                 numOfRatings++
                 console.log(ratings)
                console.log(numOfRatings)
            let avgStars = (ratings/numOfRatings)
            avgStars = avgStars.toFixed(1);
            const parkDivInfo = `
              <div>${avgStars}</div>`
              $("#parkInfo").append(parkDivInfo)
           }
        })
    )

}

module.exports = avgRating