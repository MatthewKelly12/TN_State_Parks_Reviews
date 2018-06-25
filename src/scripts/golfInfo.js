const $ = require("jquery");
const parksManager = require("./parksManager");

golfInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        console.log(park)
        if (park.park_name === currentPark && park.golf_course === "Yes")  {
             const golf = `
            <div id="golfInfo${index}">Golf Course</div>`
            $("#parkInfo").append(golf);
        }})
    })
}

module.exports = golfInfo

