const $ = require("jquery");
const reviewManager = require("./reviewManager");
const stars = require("./stars");

avgRating = (parkName) => {
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
                 console.log(ratings)
                console.log(numOfRatings)
                console.log(reviews.length)
                    let avgStars = (ratings/numOfRatings)
                    avgStars = avgStars.toFixed(1);
                    let ratingStars = stars(Math.floor(avgStars))
                     const parkDivInfo = `
                        <div><h3>${ratingStars}  Avg Stars ${avgStars}</h3></div>`
                    $("#avgStars").html(parkDivInfo)
            //    } else if (numOfRatings === 1) {
            //     let avgStars = (ratings/numOfRatings)
            //     avgStars = avgStars.toFixed(1);
            //     let ratingStars = stars(Math.floor(avgStars))
            //     const parkDivInfo = `
            //       <div>${ratingStars}  Avg Stars ${avgStars}</div>`
            //       $("#avgStars").append(parkDivInfo)
            //    }
           }
        })
    )

}

module.exports = avgRating