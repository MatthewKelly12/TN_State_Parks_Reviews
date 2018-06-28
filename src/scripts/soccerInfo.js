const $ = require("jquery");
const parksManager = require("./parksManager");

soccerInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.soccer_fields === "Yes") {
             const soccer = `
            <div id="soccerInfo${index}"><h3><i class="fas fa-futbol white"></i> Soccer Fields </h3></div>`
            $("#parkInfo").append(soccer);
        }})
    })
}

module.exports = soccerInfo

