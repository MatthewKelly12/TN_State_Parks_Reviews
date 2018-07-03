imageOptions = (category) => {
    const categories = [

         "Tennis Courts", ];
    let allParks = `
    <img src="./images/park-16.png" width="300" height="300" class="imageOptions">`
    let ada = `
    <img src="./images/ada_access.png" width="300" height="300">`
    let baseball = `
    <img src="./images/baseballGlove.jpg" width="300" height="300" class="imageOptions">`
    let basketball = `
    <img src="./images/basketballCourt.jpg" width="300" height="300" class="imageOptions">`
    let boat = `
    <img src="./images/boat.jpg" width="300" height="300" class="imageOptions">`
    let garden = `
    <img src="./images/garden.jpg" width="300" height="300" class="imageOptions">`
    let discGolf = `
    <img src="./images/discGolf.jpeg" width="300" height="300" class="imageOptions">`
    let dogPark = `
    <img src="./images/dog.jpeg" width="300" height="300" class="imageOptions">`
    let hiking = `
    <img src="./images/hiking.jpg" width="300" height="300" class="imageOptions">`
    let lake = `
    <img src="./images/lake.jpeg" width="300" height="300" class="imageOptions">`
    let mountainBike = `
    <img src="./images/mountainBike.jpg" width="300" height="300" class="imageOptions">`
    let skateboard = `
    <img src="./images/skateboard.jpg" width="300" height="300" class="imageOptions">`
    let soccerball = `
    <img src="./images/soccerball.jpg" width="300" height="300" class="imageOptions">`
    let tennisball = `
    <img src="./images/tennisball.jpeg" width="300" height="300" class="imageOptions">`
    let volleyball = `
    <img src="./images/volleyball.jpg" width="300" height="300" class="imageOptions">`

        switch(category) {
            case "All Parks": return allParks
                break;
            case "ADA Accessible": return ada
                break;
            case "Baseball Fields" : return baseball
                break;
            case "Basketball Courts": return basketball
                break;
            case "Boat Launch" : return boat
                break;
            case "Community Garden" : return garden
                break;
            case "Disc Golf" : return discGolf
                break;
            case "Dog Park": return dogPark
                break;
            case "Hiking Trails" : return hiking
                break;
            case "Lake" : return lake
                break;
            case "Mountain Bike Trails" : return mountainBike
                break;
            case "Skate Park": return skateboard
                break;
            case "Soccer Fields": return soccerball
                break;
            case "Tennis Courts": return tennisball
                break;
            case "Volleyball Courts": return volleyball
                break;
        }
}

module.exports = imageOptions