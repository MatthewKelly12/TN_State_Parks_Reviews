const $ = require("jquery");
const parksManager = require("./parksManager");

sprayparkInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        console.log(park)
        if (park.park_name === currentPark && park.spray_park === "Yes") {
             const spraypark = `
            <div id="sprayparkInfo${index}">Spray Park </div>`
            $("#parkInfo").append(spraypark);
        }})
    })
}

module.exports = sprayparkInfo

