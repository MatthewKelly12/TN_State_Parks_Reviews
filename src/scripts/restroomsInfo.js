const $ = require("jquery");
const parksManager = require("./parksManager");

restroomsInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        console.log(park)
        if (park.park_name === currentPark && park.restrooms_available === "Yes") {
             const restrooms = `
            <div id="restroomsInfo${index}"><i class="fas fa-female"></i> <i class="fas fa-male"></i> Restrooms Available</div>`
            $("#parkInfo").append(restrooms);
        }})
    })
}

module.exports = restroomsInfo

