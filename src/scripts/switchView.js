const $ = require("jquery");
switchView = (currentView) => {
  if(currentView === "#review"){
    clearDetails();
  }
  hideAll();
  $(currentView).show();
}
hideAll = () => {
  console.log("HIDE ALL RUNNING")
  $("#HomePage").hide();
  $("#profilePage").hide();
  $("#review").hide();
  $("#reviewRating").hide()
  $("#options").hide();
  $("#adaParks").hide();
  $("#baseballParks").hide();
  $("#basketballParks").hide();
  $("#boatParks").hide();
  $("#communityGardenParks").hide();
  $("#campingParks").hide();
  $("#canoeParks").hide();
  $("#discGolfParks").hide();
  $("#dogParks").hide();
  $("#fishingParks").hide();
  $("#golfParks").hide();
  $("#hikingParks").hide();
  $("#horseTrailParks").hide();
  $("#lakeParks").hide();
  $("#mountainBikeParks").hide();
  $("#picnicParks").hide();
  $("#playgroundParks").hide();
  $("#restroomParks").hide();
  $("#skateParks").hide();
  $("#soccerParks").hide();
  $("#sprayParks").hide();
  $("#tennisParks").hide();
  $("#volleyballParks").hide();
  $("#walkingParks").hide();
}
clearDetails = () => {
  $("#reviews").empty();
  $("#ReviewPage").empty();
  $("#parkPhoto").empty();
  $("#parkInfo").empty();
  $("#avgstars").empty();
}
module.exports = switchView;