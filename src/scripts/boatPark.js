const $ = require("jquery");
const parksManager = require("./parksManager");
const reviewPage = require("./reviewPage");
const switchView = require("./switchView");
boatPark = () => {
    $("#boatParks").empty();
    parksManager.getAllParks().then(
        parks => {
            parks.forEach(
                (park, index) => {
                if (park.boat_launch === "Yes") {
                   const boatDiv =
                    `<div id="boat${index}" class="allParks">
                        <h2>${park.park_name}</h2>
                        <p>${park.mapped_location_address}</p>
                        <p>${park.mapped_location_city}, ${park.mapped_location_state}</p>
                        <button id="buttonBoatDetails${index}">Details</button>
                     </div>`
                // Append div of dog parks to home page
                $("#boatParks").append(boatDiv)
                // Details button on click will assign park clicked on to current park, hide homepage and show review page  of current park selected
                $(`#buttonBoatDetails${index}`).on("click", evt =>
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
module.export = boatPark