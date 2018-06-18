const $ = require("jquery");
const activeUser = require("./activeUser");

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
    })

    $("#logOut").on("click", function () {
        console.log("clicked")
        $("#review").hide()
        $("#HomePage").hide()
        activeUser.clearActiveUser()
        $("#navBar").hide()
        $("#LogIn").show()
        $("#inputUserName").val("");
        $("#inputEmail").val("");
     })


}



navBar()

module.exports = navBar