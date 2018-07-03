const $ = require("jquery");
const parksManager = require("./parksManager");
const reviewPage = require("./reviewPage");
const switchView = require("./switchView");
discGolfParks = () => {
    $("#discGolfParks").empty();
    parksManager.getAllParks().then(
        parks => {
            parks.forEach(
                (park, index) => {
                if (park.disc_golf=== "Yes") {
                   const discGolfDiv =
                    `<div id="discGolf${index}" class="allParks">
                        <h2>${park.park_name}</h2>
                        <p><img src="./images/park-16.png" class="optionImg"></p>
                        <p>${park.mapped_location_address}</p>
                        <p>${park.mapped_location_city}, ${park.mapped_location_state}</p>
                        <button id="buttondiscGolfDetails${index}">Details</button>
                     </div>`
                // Append div of dog parks to home page
                $("#discGolfParks").append(discGolfDiv)
                // Details button on click will assign park clicked on to current park, hide homepage and show review page  of current park selected
                $(`#buttondiscGolfDetails${index}`).on("click", evt =>
                    console.log(evt.target.parentElement))
                    .on("click", function () {
                        let currentPark = park.park_name;
                        console.log(currentPark)
                        reviewPage(currentPark);
                        avgRating(currentPark);
                        parksInformation(currentPark);
                        switchView("#review");
                    })
                }}
            )
        }
    )
}
module.exports = discGolfParks