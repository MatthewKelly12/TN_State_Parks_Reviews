const $ = require("jquery");
const parksManager = require("./parksManager");

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

