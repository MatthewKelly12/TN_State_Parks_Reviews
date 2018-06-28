const $ = require("jquery");
const parksManager = require("./parksManager");

const adaInfo = require("./adaInfo")
const boatInfo = require("./boatInfo")
const baseballInfo = require("./baseballInfo")
const basketballInfo = require("./basketball")
const camping = require("./camping")
const canoeInfo = require("./canoeInfo")
const communityGardenInfo = require("./communityGarden")
const dogParkInfo = require("./dogParkInfo")
const fishingInfo = require("./fishingInfo")
const golfInfo = require("./golfInfo")
const horseTrailInfo = require("./horseTrailInfo")
const lakeInfo = require("./lakeInfo")
const picnicInfo = require("./picnicInfo")
const playground = require("./playground")
const restroomsInfo = require("./restroomsInfo")
const skateParkInfo = require("./skateParkInfo")
const soccerInfo = require("./soccerInfo")
const sprayparkInfo = require("./sprayparkInfo")
const tennisInfo = require("./tennisInfo")
const walkingInfo = require("./walkingInfo")

parksInformation = (currentPark) => {
    // avgRating(currentPark)
    adaInfo(currentPark)
    boatInfo(currentPark)
    baseballInfo(currentPark)
    basketballInfo(currentPark)
    camping(currentPark)
    canoeInfo(currentPark)
    communityGardenInfo(currentPark)
    dogParkInfo(currentPark)
    fishingInfo(currentPark)
    golfInfo(currentPark)
    hikingInfo(currentPark)
    horseTrailInfo(currentPark)
    lakeInfo(currentPark)
    picnicInfo(currentPark)
    playgroundInfo(currentPark)
    restroomsInfo(currentPark)
    skateParkInfo(currentPark)
    soccerInfo(currentPark)
    sprayparkInfo(currentPark)
    tennisInfo(currentPark)
    volleyballInfo(currentPark)
    walkingInfo(currentPark)
}

module.exports = parksInformation