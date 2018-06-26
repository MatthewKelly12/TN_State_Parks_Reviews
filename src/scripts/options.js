const $ = require("jquery");
const parksManager = require("./parksManager");
const logIn = require("./logIn");
const dogParks = require("./dogPark");

options = () => {

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
            if (category === "Dog Park"){
                dogPark();
                $("#options").hide();
            }
        })
    })

}

module.exports = options