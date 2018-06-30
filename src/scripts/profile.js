const $ = require("jquery");
const activeUser = require("./activeUser");
const reviewManager = require("./reviewManager");
const stars = require("./stars");
const deleteReview = require("./deleteReview");

profile = (id, name) => {
            $("#profileInfo").empty();
            $("#editedReviews").empty();
            $("#profileReviews").empty();
   const user = activeUser.getActiveUser();
   const date = new Date(user.timeStamp);
                let month = date.getMonth();
                month = monthOfYear(month);
                const day = date.getDate();
                const year =  date.getFullYear();

    const profileDiv = `<div id="profileDiv"><h1>${name}</h1><i class="fa fa-user" style="font-size:75px"></i><p>Member Since ${month}, ${day} ${year}</p></div>`
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
        let reviewStars = undefined;
        reviewStars = stars(parseInt(review.rating));
        if (id === reviewUserId) {
          const profileReviewDiv =
             `<div id=${review.park_name}>
                <h3>${review.park_name} ${month}, ${day} ${year}</h3>
                <h3>${review.rating} Stars ${reviewStars}</h3>
                <p>${review.title}</p>
                <p>${review.comments}</p>
                <button id="deleteReview${index}">Delete</button> <button id="editReview${index}">Edit</button>
             </div>`
             $("#profileReviews").append(profileReviewDiv)
        }
          // deleteReview(index, parseInt(reviewId));
           $(`#deleteReview${index}`).on("click", function (event) {
             reviewManager.deleteReview(reviewId)
            //  console.log(reviewId)
            //  console.log(review.park_name)
             $("#profileInfo").empty();
             $("#editedReviews").empty();
             $("#profileReviews").empty();
             profile(id, name);

           })

        $(`#editReview${index}`).on("click", function (event) {
               editedReview(reviewId)
              //  console.log("edit")
        // $("#profileInfo").empty();
        // $("#profileReviews").empty();
        // $("#profileReviews").show()
        //     profile(id, name);
           })
      })
    })
}
// profile(JSON.stringify(user.username))





module.exports = profile