const $ = require("jquery");
const activeUser = require("./activeUser");
const reviewManager = require("./reviewManager");

 //  <div>${id}</div>
profile = (id, name) => {
    const profileDiv = `<div><h2>${name}</h2></div>`
    $("#profilePage").append(profileDiv)

    reviewManager.getAllReviews().then(reviews =>{
        reviews.forEach(review => {
        if (id === review.userId) {
          const profileReviewDiv =
             `<div id="profileReviews">
                <h3>${review.park_name}</h3>
                <h4>${review.timeStamp}</h4>
             </div>`
             $("#profilePage").append(profileReviewDiv)
        }
        })
    })
}
// profile(JSON.stringify(user.username))




module.exports = profile