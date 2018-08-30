const $ = require("jquery");
const parksManager = require("./parksManager");

// function checks database to see if park has a walking path
// and if so builds div and appends to park info

walkingInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.walking === "Yes") {
             const walking = `
            	<div id="walkingInfo${index}"><h3>Walking Paths</h3></div>`
            	$("#parkInfo").append(walking);
        }})
    })
}

module.exports = walkingInfo

