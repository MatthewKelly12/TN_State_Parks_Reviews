const $ = require("jquery");
const parksManager = require("./parksManager");

soccerInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        console.log(park)
        if (park.park_name === currentPark && park.soccer_fields === "Yes") {
             const soccer = `
            <div id="soccerInfo${index}">Soccer Fields </div>`
            $("#parkInfo").append(soccer);
        }})
    })
}

module.exports = soccerInfo

