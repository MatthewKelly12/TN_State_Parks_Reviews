const $ = require("jquery");
const parksManager = require("./parksManager");

restroomsInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        console.log(park)
        if (park.park_name === currentPark && park.restrooms_available === "Yes") {
             const restrooms = `
            <div id="restroomsInfo${index}">Restrooms Available</div>`
            $("#parkInfo").append(restrooms);
        }})
    })
}

module.exports = restroomsInfo

