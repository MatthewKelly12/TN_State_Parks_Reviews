const $ = require("jquery");
const parksManager = require("./parksManager");
const reviewPage = require("./reviewPage");
const switchView = require("./switchView");

// Returns all parks from database that have hiking trails
hikingParks = () => {
    $("#hikingParks").empty();
    parksManager.getAllParks().then(
        parks => {
            parks.forEach(
                (park, index) => {
                if (park.hiking_trails === "Yes") {

					          // builds card to display park on page

                   const hikingDiv =
                    `<div id="hiking${index}" class="allParks">
                        <h2>${park.park_name}</h2>
                        <p><img src="./images/park-16.png" class="optionImg"></p>
                        <p>${park.mapped_location_address}</p>
                        <p>${park.mapped_location_city}, ${park.mapped_location_state}</p>
                        <button id="buttonhikingDetails${index}">Details</button>
					            </div>`

                // Append div of parks to home page
				        $("#hikingParks").append(hikingDiv)

				// Details button on click will assign park clicked on to current park,
				// hide homepage and show review page  of current park selected

                $(`#buttonhikingDetails${index}`).on("click", evt =>
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
module.exports = hikingParks