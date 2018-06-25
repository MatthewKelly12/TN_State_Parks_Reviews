const $ = require("jquery");
const parksManager = require("./parksManager");

playgroundInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        console.log(park)
        if (park.park_name === currentPark && park.playground === "Yes") {
             const playground = `
            <div id="playgroundInfo${index}">Playground</div>`
            $("#parkInfo").append(playground);
        }})
    })
}

module.exports = playgroundInfo

