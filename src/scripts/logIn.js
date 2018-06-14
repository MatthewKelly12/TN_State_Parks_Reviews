const $ = require("jquery");
const homePage = require("./homePage");
const reviewPage = require("./reviewPage");

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
        <p><input type="text" placeholder="User Name"></input></p>
        <p><input type="text" placeholder="Email"></input></p>
        <p><button id="buttonLogIn">Log In</button></p>
        <p><button id="buttonSignUp">Sign Up</button></p>
    </div>`

    // Append log in form to log in page
    $("#LogIn").append(logInDiv)

    // Log In button on click will log in user, hide log in page, and show home page
    $("#buttonLogIn").on("click", function () {
        $("#LogIn").hide()
        $("#HomePage").show()
    })
}

module.exports = logIn;




