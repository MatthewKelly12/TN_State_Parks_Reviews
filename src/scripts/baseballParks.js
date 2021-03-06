const $ = require("jquery");
const parksManager = require("./parksManager");
const reviewPage = require("./reviewPage");
const switchView = require("./switchView");

// Returns all parks from database that have baseball fields
baseballParks = () => {
    $("#baseballParks").empty();
    parksManager.getAllParks().then(
        parks => {
            parks.forEach(
                (park, index) => {
                if (park.baseball_fields === "Yes") {

				   const baseballDiv =
				   	// builds card to display park on page
                    `<div id="baseball${index}" class="allParks">
                        <h3>${park.park_name}</h3>
                        <p><img src="./images/park-16.png" class="optionImg"></p>
                        <p>${park.mapped_location_address}</p>
                        <p>${park.mapped_location_city}, ${park.mapped_location_state}</p>
                        <button id="buttonbaseballDetails${index}">Details</button>
					 </div>`

                // Append div of dog parks to home page
				$("#baseballParks").append(baseballDiv)

				// Details button on click will assign park clicked on
        		// to current park, hide homepage and show
				// review page  of current park selected
                $(`#buttonbaseballDetails${index}`).on("click",
                    function () {
                        let currentPark = park.park_name;
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
module.exports = baseballParks