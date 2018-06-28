const $ = require("jquery");
const parksManager = require("./parksManager");

adaInfo = (currentPark) => {
    $("#parkInfo").empty();
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.ada_accessible === "Yes")  {
             const adaAccess = `
            <div id="adaInfo${index}"><i class="fas fa-wheelchair blue"></i> Ada accesible</div>`
            $("#parkInfo").append(adaAccess);
        }})
    })
}

module.exports = adaInfo

