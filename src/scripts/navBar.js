const $ = require("jquery");
const activeUser = require("./activeUser");
const profile = require("./profile");

navBar = () => {
     const navBar =
    `<ul>
        <li><i style="font-size:35px"><a id="logOut">Log Out</a></i></li>
        <li><a id="profile"><i class="fa fa-user" style="font-size:50px"></i></a></li>
        <li><a id="home" class="active"><i class="fa fa-home" style="font-size:50px"></i></a></li>
    </ul>`
    $("#navBar").append(navBar)


    $("#home").on("click", function () {
        $("#ReviewPage").hide()
        $("#HomePage").show()
        $("#navBar").show()
        $("#reviews").empty()
        $("#reviews").hide()
        $("#profilePage").hide();
        $("#parkContainer").hide();
    })

    $("#logOut").on("click", function () {
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
        $("#review").hide()
        $("#HomePage").hide()
        $("#profilePage").show()
        $("#profileInfo").empty();
        $("#editedReviews").empty();
        $("#profileReviews").empty();
        let user = activeUser.getActiveUser()
        profile(user.id, user.username);
     })


}

navBar()

module.exports = navBar