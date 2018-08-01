const $ = require("jquery");
const parksManager = require("./parksManager");

// function checks database to see if park has hiking trails
// and if so builds div and appends to park info

hikingInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.hiking_trails === "Yes")  {
             const hiking = `
            	<div id="hikingInfo${index}"><h3>Hiking Trails</h3></div>`
            	$("#parkInfo").append(hiking);
        }})
    })
}

module.exports = hikingInfo

