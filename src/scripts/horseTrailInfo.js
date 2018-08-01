const $ = require("jquery");
const parksManager = require("./parksManager");

// function checks database to see if park has horse trails
// and if so builds div and appends to park info

horseTrailInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.horse_trails === "Yes")  {
             const horseTrail = `
            	<div id="horseTrailInfo${index}"><h3>Horse Trails</h3></div>`
            	$("#parkInfo").append(horseTrail);
        }})
    })
}

module.exports = horseTrailInfo

