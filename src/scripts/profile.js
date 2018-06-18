const $ = require("jquery");
const activeUser = require("./activeUser");
const reviewManager = require("./reviewManager");


profile = (id) => {
 const profileReviewDiv =
    `<div id="profileReviews">
        <div>Matt's Reviews</div>
        <div>${id}</div>
    </div>`


    $("#profilePage").append(profileReviewDiv)
}
// profile(JSON.stringify(user.username))




module.exports = profile