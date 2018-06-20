const $ = require("jquery");
const activeUser = require("./activeUser");
const profile = require("./profile");

navBar = () => {
    const navBar =
    `<ul>
        <li><a id="home" class="active">Home</a></li>
        <li><a id="profile">Profile</a></li>
        <li><a id="logOut">Log Out</a></li>
    </ul>`
    $("#navBar").append(navBar)

    $("#home").on("click", function () {
        console.log("clicked")
        $("#ReviewPage").hide()
        $("#HomePage").show()
        $("#navBar").show()
        $("#profilePage").hide();
    })

    $("#logOut").on("click", function () {
        console.log("clicked")
        $("#review").hide()
        $("#HomePage").hide()
        activeUser.clearActiveUser()
        $("#navBar").hide()
        $("#profilePage").hide();
        $("#LogIn").show()
        $("#inputUserName").val("");
        $("#inputEmail").val("");
     })

     $("#profile").on("click", function () {
        console.log("clicked")
        $("#review").hide()
        $("#HomePage").hide()
        $("#profilePage").show()
     })


}

navBar()

module.exports = navBar