const $ = require("jquery");
const parksManager = require("./parksManager");

discGolfInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        console.log(park)
        if (park.park_name === currentPark && park.disc_golf === "Yes")  {
             const discGolf = `
            <div id="discGolfInfo${index}">Disc Golf</div>`
            $("#parkInfo").append(discGolf);
        }})
    })
}

module.exports = discGolfInfo

