const $ = require("jquery");
const activeUser = require("./activeUser");
const reviewManager = require("./reviewManager");

 //  <div>${id}</div>
profile = (id, name) => {
    const profileDiv = `<div><h2>${name}</h2></div>`
    $("#profilePage").append(profileDiv)

    reviewManager.getAllReviews().then(reviews =>{
        reviews.forEach((review, index) => {
        let userId = parseInt(review.userId)
        if (id === userId) {
          const profileReviewDiv =
             `<div id=${review.park_name}>
                <h3>${review.park_name}</h3>
                <h4>${review.timeStamp}</h4>
                <p><button id="deleteReview${index}">Delete</button> <button id="editReview${index}">Edit</button></p>
             </div>`
             $("#profilePage").append(profileReviewDiv)
             $(`#deleteReview${index}`).on("click", function () {
                 console.log("delete")
             })
             $(`#editReview${index}`).on("click", function () {
                console.log("edit")
            })
        }
        })
    })
}
// profile(JSON.stringify(user.username))




module.exports = profile