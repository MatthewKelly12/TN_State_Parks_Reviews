const $ = require("jquery");
const parksManager = require("./parksManager");

adaInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        console.log(park)
        if (park.park_name === currentPark && park.ada_accessible === "Yes")  {
             const adaAccess = `
            <div id="adaInfo${index}">Ada accesible</div>`
            $("#parkInfo").append(adaAccess);
        }})
    })
}

module.exports = adaInfo

