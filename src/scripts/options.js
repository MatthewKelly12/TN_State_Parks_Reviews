const $ = require("jquery");
const parksManager = require("./parksManager");
const logIn = require("./logIn");
const dogParks = require("./dogPark");
const HomePage = require("./homePage");

options = () => {

    const categories = ["All Parks", "Boat Launch", "Dog Park", "Disc Golf", "Mountain Bike Trails", "Baseball Fields", "Basketball Courts", "Community Garden", "Skate Park", "Lake", "Hiking Trails/Path", "ADA Accessible", "Soccer Fields", "Tennis Courts", "Volleyball Courts"];
    categories.forEach((category, index) => {
        const optionDiv =
          `<div id="category${index}" class="optionDiv">
               <h1>${category}</h1>
               <p><img src="./images/park-16.png" height="200" width="200" class"optionImg"></p>
            </div>`
        $("#options").append(optionDiv)
        $(`#category${index}`).on("click", function () {
            if (category === "All Parks") {
                $("#options").hide();
                // $("#HomePage").show();
                homePage();

            }
            // if (category === "Dog Park"){
            //     dogPark();
            //     $("#options").hide();
            // }
        })
    })

}

module.exports = options
