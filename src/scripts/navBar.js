const $ = require("jquery");
const activeUser = require("./activeUser");
const profile = require("./profile");
const switchView = require("./switchView");
const logIn = require("./logIn")

navBar = () => {
     const navBar =
    `<ul>
        <li><i style="font-size:35px"><a id="logOut">Log Out</a></i></li>
        <li><a id="profile"><i class="fa fa-user" style="font-size:50px"></i></a></li>
        <li><a id="home" class="active"><i class="fa fa-home" style="font-size:50px"></i></a></li>
        <img src="./images/logoParks.png" width="115px" height="115px" class="navImg">
    </ul>`
    $("#navBar").append(navBar)


    $("#home").on("click", function () {
        switchView("#options");
        options();
    })

    $("#logOut").on("click", function () {
        activeUser.clearActiveUser()
        logIn();
     })

     $("#profile").on("click", function () {
        console.log("PROFILE clicked")
        switchView("#profilePage");
        let user = activeUser.getActiveUser()
        profile(user.id, user.username);
     })


}

navBar()

module.exports = navBar