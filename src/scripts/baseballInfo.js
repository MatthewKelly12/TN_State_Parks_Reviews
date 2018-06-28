const $ = require("jquery");
const parksManager = require("./parksManager");

baseballInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.baseball_fields === "Yes")  {
             const baseball = `
            <div id="baseballInfo${index}"><h3><i class="fas fa-baseball-ball white"></i> Baseball Fields</h3></div>`
            $("#parkInfo").append(baseball);
        }})
    })
}

module.exports = baseballInfo

