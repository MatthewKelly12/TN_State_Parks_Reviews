const $ = require("jquery");
const parksManager = require("./parksManager");

canoeInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.canoe_launch === "Yes")  {
             const canoe = `
            <div id="canoe${index}"><h3>Canoe Launch</h3></div>`
            $("#parkInfo").append(canoe);
        }})
    })
}

module.exports = canoeInfo

