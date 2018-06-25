const $ = require("jquery");
const parksManager = require("./parksManager");

picnicInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        console.log(park)
        if (park.park_name === currentPark && park.picnic_shelters === "Yes") {
             const picnic = `
            <div id="picnicInfo${index}">Picnic Shelters: ${park.picnic_shelters_quantity}
            </div>`
            $("#parkInfo").append(picnic);
        }})
    })
}

module.exports = picnicInfo

