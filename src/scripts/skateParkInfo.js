const $ = require("jquery");
const parksManager = require("./parksManager");

// function checks database to see if park has a skateboard park
// and if so builds div and appends to park info

skateParkInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.skate_park === "Yes") {
             const skatePark = `
            	<div id="skateParkInfo${index}><h3>SkatePark</h3></div>`
            	$("#parkInfo").append(skatePark);
        }})
    })
}

module.exports = skateParkInfo

