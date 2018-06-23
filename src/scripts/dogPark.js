// const $ = require("jquery");
// const parksManager = require("./parksManager");
// const reviewPage = require("./reviewPage");



// dogPark = () => {
//     parksManager.getAllParks().then(
//         parks => {
//             parks.forEach(
//                 (park, index) => {
//                 if (park.dog_park === "Yes") {
//                    const dogParkDiv =
//                     `<div id="dogPark${index}">
//                         <h2>${park.park_name}</h2>
//                         <p>${park.mapped_location_address}</p>
//                         <p>${park.mapped_location_city}, ${park.mapped_location_state}</p>
//                         <button id="buttonDogParkDetails${index}">Details</button>
//                      </div>`
//                 // Append div of dog parks to home page
//                 $("#dogPark").append(dogParkDiv)

//                 // Details button on click will assign park clicked on to current park, hide homepage and show review page  of current park selected
//                 $(`#buttonDogParkDetails${index}`).on("click", evt =>
//                     console.log(evt.target.parentElement))
//                     .on("click", function () {
//                         let currentPark = park.park_name;
//                         console.log(currentPark)
//                         $("#HomePage").hide()
//                         $("#dogPark").hide()
//                         $("#reviewRating").empty()
//                         $("#reviewRating").hide()
//                         $("#reviews").empty()
//                         $("#review").show()
//                         $("#ReviewPage").empty()
//                         $("#ReviewPage").show()
//                         $("#navBar").show()
//                         reviewPage(currentPark)
//                     })
//                 }}
//             )
//         }
//     )
// }

// module.export = dogPark