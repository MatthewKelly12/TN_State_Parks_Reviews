const $ = require("jquery");
const parksManager = require("./parksManager");

mountainBikeInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.mountain_bike_trails === "Yes") {
             const mountainBike = `
            <div id="mountainBikeInfo${index}"><h3>Mountain Bike Trails</h3>
            </div>`
            $("#parkInfo").append(mountainBike);
        }})
    })
}

module.exports = mountainBikeInfo

