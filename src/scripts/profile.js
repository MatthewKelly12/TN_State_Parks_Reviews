const $ = require("jquery");
const activeUser = require("./activeUser");
const reviewManager = require("./reviewManager");

 //  <div>${id}</div>
profile = (id, name) => {
    const profileDiv = `<div><h2>${name}</h2></div>`
    $("#profilePage").append(profileDiv)

    reviewManager.getAllReviews().then(reviews =>{
        reviews.forEach((review, index) => {
        let reviewId = review.id
        let reviewUserId = parseInt(review.userId)
        if (id === reviewUserId) {
          const profileReviewDiv =
             `<div id=${review.park_name}>
                <h3>${review.park_name}</h3>
                <h4>${review.timeStamp}</h4>
                <button id="deleteReview${index}">Delete</button> <button id="editReview${index}">Edit</button>
             </div>`
             $("#profilePage").append(profileReviewDiv)
        }
           $(`#deleteReview${index}`).on("click", function (event) {
            reviewManager.deleteReview(reviewId)
            console.log(reviewId)
            console.log(review.park_name)
           })
      })
    })
}
// profile(JSON.stringify(user.username))



// $(`#editReview${index}`).on("click", function (event) {
//    console.log("edit")
// })

module.exports = profile