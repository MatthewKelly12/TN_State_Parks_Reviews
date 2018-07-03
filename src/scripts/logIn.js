const $ = require("jquery");
const userManager = require("./userManager");
const activeUser = require("./activeUser");
const signUp = require("./signUp");
const options = require("./options");
const switchView = require("./switchView")

validateUser = () => {
    console.log("VALIDATE USER RUNNING")
    // Make ajax call to get all users, then check to see if username and email are both valid,if so log in sets acive user and set to session storage, else alert user
    userManager.getAllUsers().then(
        user => {
            let valid = false
            user.forEach(user => {
                if ($("#inputUserName").val() === user.username && $("#inputEmail").val() === user.password) {
                    activeUser.saveActiveUser(user);
                    valid = true
                    $("#LogIn").hide();
                    $("body").removeClass("bodyStyleLogIn")
                    $("body").addClass("bodyStyleMain")
                    // $("body").css("background-image", "none")
                    options();
                    // $("#options").show();
                    $("#navBar").show();
                }
            })
            if(!valid) {
                alert("Must Enter Valid User Name and Email Or Sign Up")
                $("#inputUserName").val("");
                $("#inputEmail").val("");
            }
        }
    )
}

logIn = () => {
    $("#LogIn").empty();
    if(activeUser.getActiveUser()) {
        console.log("ACTIVE USER EXISTS")
        $("#LogIn").hide();
        options();
        // $("#options").show();
        $("#navBar").show();
    } else {
        console.log("ACTIVE USER DOES NOT EXIST")
        // Hide all pages execpt Log In page
        switchView("#LogIn")
        $("#navBar").hide();
        $("body").removeClass("bodyStyleMain")
        $("body").addClass("bodyStyleLogIn")
    // Create variable to hold log in form
    const logo = `
    <img src="./images/logoParks.png" class="logo">`
    const logInDiv =
        `<div id="mainLogIn">
            <p><input class="inputLogIn" id="inputUserName" type="text" placeholder="User Name"></input></p>
            <p><input class="inputLogIn" id="inputEmail" type="password" placeholder="Password"></input></p>
            <p><button id="buttonLogIn" class="btn info">Log In</button></p>
            <p><button id="buttonSignUp" class="btn info">Sign Up</button></p>
        </div>`

        // Append log in form to log in page
        $("#LogIn").append(logo)
        $("#LogIn").append(logInDiv)

    //  Sign Up button on click will call signUp function which hides log in and shows sign up page
        $("#buttonSignUp").on("click", signUp)

        // Log In button on click will log in user, hide log in page, and show home page
        $("#buttonLogIn").on("click", validateUser)
    }
}

module.exports = logIn;