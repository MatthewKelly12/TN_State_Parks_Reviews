const $ = require("jquery");
const parksManager = require("./parksManager");

restroomsInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.restrooms_available === "Yes") {
             const restrooms = `
            <div id="restroomsInfo${index}"><h3><i class="fas fa-female"></i> <i class="fas fa-male"></i> Restrooms Available</h3></div>`
            $("#parkInfo").append(restrooms);
        }})
    })
}

module.exports = restroomsInfo

