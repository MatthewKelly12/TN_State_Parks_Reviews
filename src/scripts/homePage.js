const $ = require("jquery");
const parksManager = require("./parksManager");
const reviewPage = require("./reviewPage");
const parksInformation = require("./parkInformation");

// Create variable to hold current park that gets clicked/selected

homePage = () => {
    $("#HomePage").empty();
// Ajax call to get all park locations and make a div for each park w/name and location
    parksManager.getAllParks().then(
        parks => {
            parks.forEach(
                (park, index) => {
                const parkDiv =
                    `<div id="park${index}" class="allParks">
                        <h3>${park.park_name}</h3>
                        <p><img src="./images/park-16.png" class="optionImg"></p>
                        <p>${park.mapped_location_address}</p>
                        <p>${park.mapped_location_city}, ${park.mapped_location_state}</p>
                        <button id="buttonDetails${index}">Details</button>
                    </div>`
                // Append div of parks to home page
                $("#HomePage").append(parkDiv)

                // Details button on click will assign park clicked on to current park, hide homepage and show review page  of current park selected
                $(`#buttonDetails${index}`).on("click", function () {
                        let currentPark = park.park_name;
                        console.log(currentPark)
                        reviewPage(currentPark);
                        avgRating(currentPark);
                        parksInformation(currentPark);
                        switchView("#review");
                    })
                }
            )
        }
    )
}

module.exports = homePage