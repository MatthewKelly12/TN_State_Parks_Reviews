const $ = require("jquery");
const parksManager = require("./parksManager");

canoeInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        console.log(park)
        if (park.park_name === currentPark && park.canoe_launch === "Yes")  {
             const canoe = `
            <div id="canoe${index}">Canoe Launch</div>`
            $("#parkInfo").append(canoe);
        }})
    })
}

module.exports = canoeInfo

