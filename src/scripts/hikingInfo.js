const $ = require("jquery");
const parksManager = require("./parksManager");

hikingInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.hiking_trails === "Yes")  {
             const hiking = `
            <div id="hikingInfo${index}">Hiking Trails</div>`
            $("#parkInfo").append(hiking);
        }})
    })
}

module.exports = hikingInfo

