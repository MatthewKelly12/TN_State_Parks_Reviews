const $ = require("jquery");
const parksManager = require("./parksManager");

fishingInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        console.log(park)
        if (park.park_name === currentPark && park.fishing_by_permit === "Yes")  {
             const fishing = `
            <div id="fishingInfo${index}">Fishing By Permit</div>`
            $("#parkInfo").append(fishing);
        }})
    })
}

module.exports = fishingInfo

