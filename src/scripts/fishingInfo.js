const $ = require("jquery");
const parksManager = require("./parksManager");


// function checks database to see if park allows fishing by permit
// and if so builds div and appends to park info

fishingInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.fishing_by_permit === "Yes")  {
             const fishing = `
            <div id="fishingInfo${index}"><h3><i class="fas fa-fish blue"></i> Fishing By Permit</h3></div>`
            $("#parkInfo").append(fishing);
        }})
    })
}

module.exports = fishingInfo

