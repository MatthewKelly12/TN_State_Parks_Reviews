const $ = require("jquery");
const parksManager = require("./parksManager");

// function checks database to see if park has a dog park
// and if so builds div and appends to park info
dogParkInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.dog_park === "Yes")  {
             const dogPark = `
            <div id="dogParkInfo${index}"><h3>Dog Park</h3></div>`
            $("#parkInfo").append(dogPark);
        }})
    })
}

module.exports = dogParkInfo

