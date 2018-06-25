const $ = require("jquery");
const parksManager = require("./parksManager");

baseballInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        console.log(park)
        if (park.park_name === currentPark && park.baseball_fields === "Yes")  {
             const baseball = `
            <div id="baseballInfo${index}">Baseball Fields</div>`
            $("#parkInfo").append(baseball);
        }})
    })
}

module.exports = baseballInfo

