const $ = require("jquery");
const parksManager = require("./parksManager");

// function checks database to see if park has a golf course
// and if so builds div and appends to park info

golfInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        console.log(parks)
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.golf_course === "Yes")  {
             const golf = `
            <div id="golfInfo${index}"><h3><i class="fas fa-golf-ball white"></i> Golf Course</h3></div>`
            $("#parkInfo").append(golf);
        }})
    })
}

module.exports = golfInfo

