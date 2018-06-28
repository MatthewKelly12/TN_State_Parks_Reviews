const $ = require("jquery");
const parksManager = require("./parksManager");

baseballInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.baseball_fields === "Yes")  {
             const baseball = `
            <div id="baseballInfo${index}"><i class="fas fa-baseball-ball"></i> Baseball Fields</div>`
            $("#parkInfo").append(baseball);
        }})
    })
}

module.exports = baseballInfo

