const $ = require("jquery");
const parksManager = require("./parksManager");

dogParkInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.dog_park === "Yes")  {
             const dogPark = `
            <div id="dogParkInfo${index}">Dog Park</div>`
            $("#parkInfo").append(dogPark);
        }})
    })
}

module.exports = dogParkInfo
