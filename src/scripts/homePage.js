const $ = require("jquery");
const parksManager = require("./parksManager");
const reviewPage = require("./reviewPage");
const logIn = require("./logIn");
const navBar = require("./navBar");
const parksInformation = require("./parkInformation");


// const adaInfo = require("./adaInfo")
// const boatInfo = require("./boatInfo")
// const baseballInfo = require("./baseballInfo")
// const basketballInfo = require("./basketball")
// const camping = require("./camping")
// const canoeInfo = require("./canoeInfo")
// const communityGardenInfo = require("./communityGarden")
// const dogParkInfo = require("./dogParkInfo")
// const fishingInfo = require("./fishingInfo")
// const golfInfo = require("./golfInfo")
// const horseTrailInfo = require("./horseTrailInfo")
// const lakeInfo = require("./lakeInfo")
// const picnicInfo = require("./picnicInfo")
// const playground = require("./playground")
// const restroomsInfo = require("./restroomsInfo")
// const skateParkInfo = require("./skateParkInfo")
// const soccerInfo = require("./soccerInfo")
// const sprayparkInfo = require("./sprayparkInfo")
// const tennisInfo = require("./tennisInfo")
// const walkingInfo = require("./walkingInfo")



// Create variable to hold current park that gets clicked/selected

homePage = () => {
      $("#HomePage").show();
// Ajax call to get all park locations and make a div for each park w/name and location
parksManager.getAllParks().then(
    parks => {
        parks.forEach(
            (park, index) => {
               const parkDiv =
                `<div id="park${index}" class="allParks">
                    <h3>${park.park_name}</h3>
                    <p><img src="./images/park-16.png" height="200" width="200" class"optionImg"></p>
                    <p>${park.mapped_location_address}</p>
                    <p>${park.mapped_location_city}, ${park.mapped_location_state}</p>
                    <button id="buttonDetails${index}">Details</button>
                 </div>`
            // Append div of parks to home page
            $("#HomePage").append(parkDiv)

            // Details button on click will assign park clicked on to current park, hide homepage and show review page  of current park selected
            $(`#buttonDetails${index}`).on("click", evt =>
                console.log(evt.target.parentElement))
                .on("click", function () {
                    let currentPark = park.park_name;
                    console.log(currentPark)
                    $("#HomePage").hide()
                    $("#reviewRating").empty()
                    $("#reviewRating").hide()
                    $("#parkContainer").show()
                    $("#reviews").empty()
                    $("#reviews").show()
                    $("#review").show()
                    $("#ReviewPage").empty()
                    $("#ReviewPage").show()
                    $("#parkPhoto").empty()
                    $("#navBar").show()
                    reviewPage(currentPark)
                    $("parkInfo").empty()
                    avgRating(currentPark)
                    parksInformation(currentPark);


                    // adaInfo(currentPark)
                    // boatInfo(currentPark)
                    // baseballInfo(currentPark)
                    // basketballInfo(currentPark)
                    // camping(currentPark)
                    // canoeInfo(currentPark)
                    // communityGardenInfo(currentPark)
                    // dogParkInfo(currentPark)
                    // fishingInfo(currentPark)
                    // golfInfo(currentPark)
                    // hikingInfo(currentPark)
                    // horseTrailInfo(currentPark)
                    // lakeInfo(currentPark)
                    // picnicInfo(currentPark)
                    // playgroundInfo(currentPark)
                    // restroomsInfo(currentPark)
                    // skateParkInfo(currentPark)
                    // soccerInfo(currentPark)
                    // sprayparkInfo(currentPark)
                    // tennisInfo(currentPark)
                    // volleyballInfo(currentPark)
                    // walkingInfo(currentPark)
                })
            }
        )
    }
)
}

module.exports = homePage





