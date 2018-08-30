const $ = require("jquery");
const parksManager = require("./parksManager");

// function checks database to see if park has tennis courts
// and if so builds div and appends to park info

tennisInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.tennis_courts === "Yes") {
             const tennis = `
            	<div id="tennisInfo${index}"><h3>Tennis Courts<h3></div>`
            	$("#parkInfo").append(tennis);
        }})
    })
}

module.exports = tennisInfo

