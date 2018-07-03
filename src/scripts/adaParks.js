const $ = require("jquery");
const parksManager = require("./parksManager");
const reviewPage = require("./reviewPage");
const switchView = require("./switchView");
adaParks = () => {
    $("#adaParks").empty();
    parksManager.getAllParks().then(
        parks => {
            parks.forEach(
                (park, index) => {
                if (park.ada_accessible === "Yes") {
                   const adaDiv =
                    `<div id="ada${index}" class="allParks">
                        <h3>${park.park_name}</h3>
                        <p><img src="./images/park-16.png" class="optionImg"></p>
                        <p>${park.mapped_location_address}</p>
                        <p>${park.mapped_location_city}, ${park.mapped_location_state}</p>
                        <button id="buttonAdaDetails${index}">Details</button>
                     </div>`
                // Append div of dog parks to home page
                $("#adaParks").append(adaDiv)
                // Details button on click will assign park clicked on to current park, hide homepage and show review page  of current park selected
                $(`#buttonAdaDetails${index}`).on("click", evt =>
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
module.exports = adaParks