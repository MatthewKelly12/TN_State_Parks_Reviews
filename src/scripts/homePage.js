const $ = require("jquery");
const parksManager = require("./parksManager");
const reviewPage = require("./reviewPage");
const logIn = require("./logIn");
const navBar = require("./navBar");



// Create variable to hold current park that gets clicked/selected


// Ajax call to get all park locations and make a div for each park w/name and location
parksManager.getAllParks().then(
    parks => {
        parks.forEach(
            (park, index) => {
               const parkDiv =
                `<div id="park${index}">
                    <h2>${park.park_name}</h2>
                    <p>${park.mapped_location_address}</p>
                    <p>${park.mapped_location_city}, ${park.mapped_location_state}</p>
                    <button id="buttonDetails${index}">Details</button>
                 </div>`
            // Append div of parks to home page
            $("#HomePage").append(parkDiv)

            // Details button on click will assign park clicked on to current park, hide homepage and show review page  of current park selected
            $(`#buttonDetails${index}`).on("click", evt =>
                console.log(evt.target.parentElement))
                .on("click", function () {
                    let currentPark = park.park_name;
                    console.log(currentPark)
                    $("#HomePage").hide()
                    $("#reviewRating").empty()
                    $("#reviewRating").hide()
                    $("#reviews").empty()
                    $("#review").show()
                    $("#ReviewPage").empty()
                    $("#ReviewPage").show()
                    $("parkInfo").empty()
                    $("#navBar").show()
                    reviewPage(currentPark)
                })
            }
        )
    }
)





