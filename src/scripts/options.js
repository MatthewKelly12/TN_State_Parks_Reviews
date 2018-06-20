const $ = require("jquery");
const parksManager = require("./parksManager");
const logIn = require("./logIn");

options = () => {
// parksManager.getAllParks().then(parks => {
//     parks.forEach(park => {
//       if  (park.ada_accessible === "Yes") {
//         console.log(park)
//       }
//     })
// })
    const categories = ["All Parks", "Boat Launch", "Dog Park", "Disc Golf", "Mountain Bike Trails", "Baseball Fields", "Basketball Courts", "Community Garden", "Skate Park", "Lake", "Hiking Trails/Path", "ADA Accessible", "Soccer Fields", "Tennis Courts", "Volleyball Courts"];
    categories.forEach((category, index) => {
        const optionDiv =
            `<div id="category${index}">
                <h1>${category}</h1>
             </div>`
        $("#options").append(optionDiv)
        $(`#category${index}`).on("click", function () {

            if (category === "All Parks") {
                $("#options").hide();
                $("#HomePage").show();
            }
        })
    })

}

module.exports = options