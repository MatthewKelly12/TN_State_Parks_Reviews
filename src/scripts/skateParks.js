const $ = require("jquery");
const parksManager = require("./parksManager");
const reviewPage = require("./reviewPage");
const switchView = require("./switchView");

// Returns all parks from database that have a skateboard park
skateParks = () => {
    $("#skateParks").empty();
    parksManager.getAllParks().then(
        parks => {
            parks.forEach(
                (park, index) => {
                if (park.skate_park === "Yes") {

					// builds card to display park on page

                   const skateDiv =
                    `<div id="skate${index}" class="allParks">
                        <h2>${park.park_name}</h2>
                        <p><img src="./images/park-16.png" class="optionImg"></p>
                        <p>${park.mapped_location_address}</p>
                        <p>${park.mapped_location_city}, ${park.mapped_location_state}</p>
                        <button id="buttonskateDetails${index}">Details</button>
					 </div>`

                // Append div of parks to home page
				$("#skateParks").append(skateDiv)

                // Details button on click will assign park clicked on to current park, hide homepage and show review page  of current park selected
                $(`#buttonskateDetails${index}`).on("click", evt =>
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
module.exports = skateParks