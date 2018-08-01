const $ = require("jquery");
const parksManager = require("./parksManager");

// function checks database to see if park has boat launch/ramp
// and if so builds div and appends to park info
boatInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.boat_launch === "Yes")  {
             const boatAccess = `
            <div id="boatInfo${index}"><h3>Boat Launch</h3></div>`
            $("#parkInfo").append(boatAccess);
        }})
    })
}

module.exports = boatInfo

