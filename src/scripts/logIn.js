const $ = require("jquery");
const homePage = require("./homePage");
const reviewPage = require("./reviewPage");
const userManager = require("./userManager");
const activeUser = require("./activeUser");
const signUp = require("./signUp");
const navBar = require("./navBar");
const profile = require("./profile");
const options = require("./options");
const parksManager = require("./parksManager");


// Hide all pages execpt Log In page
$(document).ready(function () {
    $("#HomePage").hide();
    $("#ReviewPage").hide();
    $("#signUpPage").hide();
    $("#navBar").hide();
    $("#profilePage").hide();
    $("#options").hide();
});



 logIn = () => {
    // Create variable to hold log in form
  const logInDiv =
    `<div id="mainLogIn">
        <h2>TN State Parks</h2>
        <p><input id="inputUserName" type="text" placeholder="User Name"></input></p>
        <p><input id="inputEmail" type="password" placeholder="Password"></input></p>
        <p><button id="buttonLogIn">Log In</button></p>
        <p><button id="buttonSignUp">Sign Up</button></p>
    </div>`

    // Append log in form to log in page
    $("#LogIn").append(logInDiv)

//  Sign Up button on click will call signUp function which hides log in and shows sign up page
    $("#buttonSignUp").on("click", function () {
        signUp();
    })

    // Log In button on click will log in user, hide log in page, and show home page
    $("#buttonLogIn").on("click", function () {

    // Make ajax call to get all users, then check to see if username and email are both valid,if so log in sets acive user and set to session storage, else alert user
        userManager.getAllUsers().then(
            user => {
                let valid = false
                user.forEach(user => {
                    if ($("#inputUserName").val() === user.username && $("#inputEmail").val() === user.password) {
                        activeUser.saveActiveUser(user);
                        valid = true
                        $("#LogIn").hide();
                        // $("#HomePage").show();
                        options();
                        $("#options").show();
                        $("#navBar").show();
                    }
                })
                let userCurrent = activeUser.getActiveUser()
                    console.log(JSON.stringify(userCurrent))
                if (userCurrent) {
                    profile(userCurrent.id, userCurrent.username)
                }
                if(!valid) {
                    alert("Must Enter Valid User Name and Email Or Sign Up")
                     $("#inputUserName").val("");
                     $("#inputEmail").val("");
                }
            }
        )
    })
}

module.exports = logIn;




