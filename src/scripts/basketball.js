const $ = require("jquery");
const parksManager = require("./parksManager");


// function checks database to see if park has basketball courts
// and if so builds div and appends to park info
basketballInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.basketball_courts === "Yes")  {
             const basketball = `
            <div id="basketballInfo${index}"><h3><i class="fas fa-basketball-ball checked"></i> Basketball Courts</h3></div>`
            $("#parkInfo").append(basketball);
        }})
    })
}

module.exports = basketballInfo

