const $ = require("jquery");
const parksManager = require("./parksManager");

communityGardenInfo = (currentPark) => {
    parksManager.getAllParks().then(parks => {
        parks.forEach((park, index) => {
        if (park.park_name === currentPark && park.community_garden === "Yes")  {
             const community = `
            <div id="communityGarden${index}">Community Garden</div>`
            $("#parkInfo").append(community);
        }})
    })
}

module.exports = communityGardenInfo

