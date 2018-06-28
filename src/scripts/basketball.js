const $ = require("jquery");
const parksManager = require("./parksManager");

basketballInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.basketball_courts === "Yes")  {
             const basketball = `
            <div id="basketballInfo${index}"><i class="fas fa-basketball-ball"></i> Basketball Courts</div>`
            $("#parkInfo").append(basketball);
        }})
    })
}

module.exports = basketballInfo

