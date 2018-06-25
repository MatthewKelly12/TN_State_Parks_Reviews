const $ = require("jquery");
const parksManager = require("./parksManager");

volleyballInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        console.log(park)
        if (park.park_name === currentPark && park.volleyball === "Yes") {
             const volleyball = `
            <div id="volleyballInfo${index}">Volleyball Courts </div>`
            $("#parkInfo").append(volleyball);
        }})
    })
}

module.exports = volleyballInfo

