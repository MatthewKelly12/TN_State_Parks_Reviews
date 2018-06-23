const $ = require("jquery");
const reviewManager = require("./reviewManager");
const activeUser = require("./activeUser");

// editedReview function will allow user to click on a review
//  and edit it and submit it back to the database
editedReview = (id) => {
    // Ajax call to get single review
    reviewManager.getSingleReview(id).then(review => {
    // Build variable to hold div of edited review
        const editedReviewDiv =
         `<div>
            <h2>Please Rate
            <select id="editedRating${id}">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select></h2>
            <p><input id="editedTitle${id}" type="text" placeholder="Title"></input></p>
            <p><input id="editedComments${id}" type="text" placeholder="Comments"></input></p>
            <p><button id="editedReviewButton${id}">Submit Review</button></p>
        </div>`
        //Append editedReviw div
    $("#editedReviews").append(editedReviewDiv)
    // Set values of title, comments, and rating to match review
        $(`#editedRating${id}`).val(review.rating)
        $(`#editedTitle${id}`).val(review.title)
        $(`#editedComments${id}`).val(review.comments)
    // Hide profileReviews and show editedReviews
    $("#profileReviews").hide()
    $("#editedReviews").show()
    // On click of editedReviewButton, review will update
    // in the database and review div will empty and hide
    $(`#editedReviewButton${id}`).on("click", function () {
        let user = (activeUser.getActiveUser())
        console.log(user.id)
        let editedReview = {
             park_name: review.park_name,
             userId: user.id,
             rating: $(`#editedRating${id}`).val(),
             title: $(`#editedTitle${id}`).val(),
             comments: $(`#editedComments${id}`).val(),
             timeStamp: new Date()
        }
        console.log(editedReview)
        reviewManager.updateReviews(id, editedReview);
        $("#editedReviews").empty()
        $("#editedReviews").hide()
        $("#profileReviews").show()
        $("#profileInfo").empty();
        $("#profileReviews").empty();
        profile(user.id, user.username);
    })
    })
}

module.exports = editedReview



