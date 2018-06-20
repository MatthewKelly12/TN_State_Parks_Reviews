const $ = require("jquery");
const activeUser = require("./activeUser");
const reviewManager = require("./reviewManager");

profile = (id, name) => {
    const profileDiv = `<div><h1>${name}</h1></div>`
    $("#profileInfo").append(profileDiv)

    reviewManager.getAllReviews().then(reviews =>{
        reviews.forEach((review, index) => {
        let reviewId = review.id
        let reviewUserId = parseInt(review.userId)

        const date = new Date(review.timeStamp);
        let month = date.getMonth();
        month = monthOfYear(month);
        const day =   date.getDate();
        const year =  date.getFullYear();
        if (id === reviewUserId) {
          const profileReviewDiv =
             `<div id=${review.park_name}>
                <h3>${review.park_name} ${month}, ${day} ${year}</h3>
                <h3>${review.rating} Stars</h3>
                <p>${review.title}</p>
                <p>${review.comments}</p>
                <button id="deleteReview${index}">Delete</button> <button id="editReview${index}">Edit</button>
             </div>`
             $("#profileReviews").append(profileReviewDiv)
        }
           $(`#deleteReview${index}`).on("click", function (event) {
            reviewManager.deleteReview(reviewId)
            console.log(reviewId)
            console.log(review.park_name)
           })

           $(`#editReview${index}`).on("click", function (event) {
               editedReview(reviewId)
               console.log("edit")
           })
      })
    })
}
// profile(JSON.stringify(user.username))





module.exports = profile