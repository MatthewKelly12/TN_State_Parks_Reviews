const $ = require("jquery");
const parksManager = require("./parksManager");

discGolfInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.disc_golf === "Yes")  {
             const discGolf = `
            <div id="discGolfInfo${index}"><h3>Disc Golf</h3></div>`
            $("#parkInfo").append(discGolf);
        }})
    })
}

module.exports = discGolfInfo

