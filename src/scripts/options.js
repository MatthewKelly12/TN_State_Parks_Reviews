const $ = require("jquery");
const parksManager = require("./parksManager");
const logIn = require("./logIn");
const dogParks = require("./dogPark");
const switchView = require("./switchView");
const BoatPark = require("./boatPark");
const AdaParks = require("./adaParks");
const BaseballParks = require("./baseballParks");
const BasketballParks = require("./basketballParks");
const CommunityGardenParks = require("./communityGardenParks");
const DiscGolfParks = require("./discGolfParks");
const HikingParks = require("./hikingParks");
const LakeParks = require("./lakeParks");
const MountainBikeParks = require("./mountainBikeParks");
const SkateParks = require("./skateParks");
const soccerParks = require("./soccerParks");
const TennisParks = require("./tennisParks");
const VolleyballParks = require("./volleyballParks");
const imageOptions = require("./imageOptions");


options = () => {
    $("#options").empty();
    const categories = ["All Parks",  "ADA Accessible", "Baseball Fields", "Basketball Courts", "Boat Launch", "Community Garden", "Disc Golf", "Dog Park", "Hiking Trails", "Lake",  "Mountain Bike Trails",  "Skate Park",  "Soccer Fields", "Tennis Courts", "Volleyball Courts"];
    categories.forEach((category, index) => {

		let parkImg = imageOptions(category);

        let optionDiv =
          `<div id="category${index}" class="optionDiv">
               <h1>${category}</h1>
               <p>${parkImg}</p>
			     </div>`

        $("#options").append(optionDiv)
        $(`#category${index}`).on("click", function () {
            if (category === "All Parks") {
                console.log("ALL PARKS CONDITION")
                switchView("#HomePage");
                homePage();
            }
            if (category === "Dog Park"){
                console.log("DOG PARKS CONDITION")
                switchView("#dogParks");
                dogPark();
            }
            if (category === "Boat Launch"){
                console.log("BOAT PARKS CONDITION")
                switchView("#boatParks");
                boatPark();
            }
            if (category === "ADA Accessible"){
                console.log("ADA Accessible CONDITION")
                switchView("#adaParks");
                adaParks();
            }
            if (category === "Baseball Fields"){
                console.log("Baseball Fields CONDITION")
                switchView("#baseballParks");
                baseballParks();
            }
            if (category === "Basketball Courts"){
                console.log("Basketball Courts CONDITION")
                switchView("#basketballParks");
                basketballParks();
            }
            if (category === "Community Garden"){
                console.log("Community Garden CONDITION")
                switchView("#communityGardenParks");
                communityGardenParks();
            }
            if (category === "Disc Golf"){
                console.log("Disc Golf CONDITION")
                switchView("#discGolfParks");
                discGolfParks();
            } 
            if (category === "Hiking Trails"){
                console.log("Hiking Trails/Path CONDITION")
                switchView("#hikingParks");
                hikingParks()
            }
            if (category === "Lake"){
                console.log("Lake CONDITION")
                switchView("#lakeParks");
                lakeParks()
            }
            if (category === "Mountain Bike Trails"){
                console.log("Mountain Bike Trails CONDITION")
                switchView("#mountainBikeParks");
                mountainBikeParks()
            }
            if (category === "Skate Park"){
                console.log("Skate Park CONDITION")
                switchView("#skateParks");
                skateParks()
            }
            if (category === "Soccer Fields"){
                console.log("Soccer Fields CONDITION")
                switchView("#soccerParks");
                soccerParks()
            }
            if (category === "Tennis Courts"){
                console.log("Tennis Courts CONDITION")
                switchView("#tennisParks");
                tennisParks()
            }
            if (category === "Volleyball Courts"){
                console.log("Volleyball Courts CONDITION")
                switchView("#volleyballParks");
                volleyballParks()
            }
        })
    })
    $("#options").show();
}

module.exports = options