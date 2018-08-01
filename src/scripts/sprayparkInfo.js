const $ = require("jquery");
const parksManager = require("./parksManager");

// function checks database to see if park has a spray park
// and if so builds div and appends to park info

sprayparkInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.spray_park === "Yes") {
             const spraypark = `
            	<div id="sprayparkInfo${index}"><h3>Spray Park </h3></div>`
            	$("#parkInfo").append(spraypark);
        }})
    })
}

module.exports = sprayparkInfo

