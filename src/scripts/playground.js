const $ = require("jquery");
const parksManager = require("./parksManager");

// function checks database to see if park has a playground
// and if so builds div and appends to park info

playgroundInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.playground === "Yes") {
             const playground = `
            	<div id="playgroundInfo${index}"><h3>Playground</h3></div>`
            	$("#parkInfo").append(playground);
        }})
    })
}

module.exports = playgroundInfo

