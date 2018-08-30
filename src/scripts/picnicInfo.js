const $ = require("jquery");
const parksManager = require("./parksManager");

// function checks database to see if park has picnic shelters and how many
// and if so builds div and appends to park info

picnicInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.picnic_shelters === "Yes") {
             const picnic = `
            	<div id="picnicInfo${index}"><h3>Picnic Shelters: ${park.picnic_shelters_quantity}</h3>
            	</div>`
            $("#parkInfo").append(picnic);
        }})
    })
}

module.exports = picnicInfo

