const $ = require("jquery");
const parksManager = require("./parksManager");

// function checks database to see if park has a community garden
// and if so builds div and appends to park info

communityGardenInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.community_garden === "Yes")  {
             const community = `
            <div id="communityGarden${index}"><h3>Community Garden</h3></div>`
            $("#parkInfo").append(community);
        }})
    })
}

module.exports = communityGardenInfo

