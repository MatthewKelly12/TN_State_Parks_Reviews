const $ = require("jquery");
const parksManager = require("./parksManager");

// function checks database to see if park is ada accesible
// and if so builds div and appends to park info

adaInfo = (currentPark) => {
    $("#parkInfo").empty();
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.ada_accessible === "Yes")  {
             const adaAccess = `
            	<div id="adaInfo${index}"><h3><i class="fas fa-wheelchair blue"></i> Ada accesible</h3></div>`
            	$("#parkInfo").append(adaAccess);
        }})
    })
}

module.exports = adaInfo

