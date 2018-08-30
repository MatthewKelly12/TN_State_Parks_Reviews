const $ = require("jquery");
const parksManager = require("./parksManager");

// function checks database to see if park has volleyball courts
// and if so builds div and appends to park info

volleyballInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.volleyball === "Yes") {
             const volleyball = `
            	<div id="volleyballInfo${index}"><h3>Volleyball Courts</h3> </div>`
            	$("#parkInfo").append(volleyball);
        }})
    })
}

module.exports = volleyballInfo

