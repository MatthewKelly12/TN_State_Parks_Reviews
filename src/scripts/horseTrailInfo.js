const $ = require("jquery");
const parksManager = require("./parksManager");

horseTrailInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        console.log(park)
        if (park.park_name === currentPark && park.horse_trails === "Yes")  {
             const horseTrail = `
            <div id="horseTrailInfo${index}">Horse Trails</div>`
            $("#parkInfo").append(horseTrail);
        }})
    })
}

module.exports = horseTrailInfo

