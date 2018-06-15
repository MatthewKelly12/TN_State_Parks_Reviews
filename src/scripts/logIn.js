const $ = require("jquery");
const homePage = require("./homePage");
const reviewPage = require("./reviewPage");
const userManager = require("./userManager");
const activeUser = require("./activeUser");


// Hide all pages execpt Log In page
$(document).ready(function () {
    $("#HomePage").hide();
    $("#ReviewPage").hide();
});


 logIn = () => {
    // Create variable to hold log in form
  const logInDiv =
    `<div id="mainLogIn">
        <h2>"TN State Park"</h2>
        <p><input id="inputUserName" type="text" placeholder="User Name"></input></p>
        <p><input id="inputEmail" type="text" placeholder="Password"></input></p>
        <p><button id="buttonLogIn">Log In</button></p>
        <p><button id="buttonSignUp">Sign Up</button></p>
    </div>`

    // Append log in form to log in page
    $("#LogIn").append(logInDiv)

    // Log In button on click will log in user, hide log in page, and show home page
    $("#buttonLogIn").on("click", function () {

    // Make ajax call to get all users, then check to see if username and email are both valid, else alert user
        userManager.getAllUsers().then(
            user => {
                user.forEach(user => {
                    if ($("#inputUserName").val() === user.username && $("#inputEmail").val() === user.password) {
                        activeUser.saveActiveUser(user);
                        $("#LogIn").hide();
                        $("#HomePage").show();
                    } else {
                        alert("Must Enter Valid User Name and Email")
                         $("#inputUserName").val("");
                         $("#inputEmail").val("");
                    }
                })
            }
        )
    })
}

module.exports = logIn;




