const $ = require("jquery");
const parksManager = require("./parksManager");

lakeInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        console.log(park)
        if (park.park_name === currentPark && park.lake === "Yes")  {
             const lake = `
            <div id="lakeInfo${index}">Lake</div>`
            $("#parkInfo").append(lake);
        }})
    })
}

module.exports = lakeInfo

