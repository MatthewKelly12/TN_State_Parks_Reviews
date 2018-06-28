const $ = require("jquery");
const parksManager = require("./parksManager");

boatInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.boat_launch === "Yes")  {
             const boatAccess = `
            <div id="boatInfo${index}">Boat Launch</div>`
            $("#parkInfo").append(boatAccess);
        }})
    })
}

module.exports = boatInfo

