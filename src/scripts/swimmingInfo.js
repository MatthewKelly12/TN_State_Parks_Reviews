const $ = require("jquery");
const parksManager = require("./parksManager");

// function checks database to see if park has a swimming pool
// and if so builds div and appends to park info

swimmingInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.swimming_pool === "Yes") {
             const swimming = `
            	<div id="swimmingInfo${index}"><h3>Swimming Pool</h3></div>`
            	$("#parkInfo").append(swimming);
        }})
    })
}

module.exports = swimmingInfo







