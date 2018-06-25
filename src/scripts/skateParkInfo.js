const $ = require("jquery");
const parksManager = require("./parksManager");

skateParkInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        console.log(park)
        if (park.park_name === currentPark && park.skate_park === "Yes") {
             const skatePark = `
            <div id="skateParkInfo${index}">Skate Park </div>`
            $("#parkInfo").append(skatePark);
        }})
    })
}

module.exports = skateParkInfo

