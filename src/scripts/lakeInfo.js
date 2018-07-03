const $ = require("jquery");
const parksManager = require("./parksManager");

lakeInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.lake === "Yes")  {
             const lake = `
            <div id="lakeInfo${index}"><h3>Lake</h3></div>`
            $("#parkInfo").append(lake);
        }})
    })
}

module.exports = lakeInfo

