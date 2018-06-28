const $ = require("jquery");
const parksManager = require("./parksManager");

walkingInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.walking === "Yes") {
             const walking = `
            <div id="walkingInfo${index}">Walking Paths</div>`
            $("#parkInfo").append(walking);
        }})
    })
}

module.exports = walkingInfo

