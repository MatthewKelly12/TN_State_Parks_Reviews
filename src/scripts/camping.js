const $ = require("jquery");
const parksManager = require("./parksManager");

campingInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.camping_available_by_permit
            === "Yes")  {
             const camping = `
            <div id="campingInfo${index}"><h3>Camping By Permit</h3></div>`
            $("#parkInfo").append(camping);
        }})
    })
}

module.exports = campingInfo

