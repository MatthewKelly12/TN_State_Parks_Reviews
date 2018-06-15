const $ = require("jquery");
const userManager = require("./userManager");

// signUp function will get called when sign up button is clicked from log in page
signUp = () => {
// First hide log in page
    $("#mainLogIn").hide();
// Create variable to hold signUp div
    const signUpDiv =
    `<div id="mainSignUp">
        <h2>Sign Up</h2>
        <p><input id="inputRegisterUserName" type="text" placeholder="User Name"></input></p>
        <p><input id="inputRegisterPassword" type="text" placeholder="Password"></input></p>
        <p><input id="inputRegisterCity" type="text" placeholder="City"></input></p>
        <p><input id="inputRegisterState" type="text" placeholder="State"></input></p>
        <p><input id="inputRegisterZip" type="text" placeholder="Zip"></input></p>
        <p><button id="buttonSignUpRegister">Sign Up</button></p>
    </div>`
//   Append signUpdiv to signUpPage then show signUpPage
    $("#signUpPage").append(signUpDiv)
    $("#signUpPage").show();
//  buttonSignUp on click will enter users sign up info into database of users, hide signUpDiv, show LogIn page
$("#buttonSignUpRegister").on("click", function () {
    // First make sure no empty data goes into database and if so alert user
    if ($("#inputRegisterUserName").val() === "" || $("#inputRegisterPassword").val() === "" ||
        $("#inputRegisterCity").val() === "" || $("#inputRegisterState").val() === "" || $("#inputRegisterZip").val() === ""){
            alert("Must fill out all input fields")
            // Reset input fields
            $("#inputRegisterUserName").val("");
            $("#inputRegisterPassword").val("");
            $("#inputRegisterCity").val("");
            $("#inputRegisterState").val("");
            $("#inputRegisterZip").val("")
            } else {
            // Create variable to hold user sign up info
             const userInfo = {
                username: $("#inputRegisterUserName").val(),
                password: $("#inputRegisterPassword").val(),
                city: $("#inputRegisterCity").val(),
                state: $("#inputRegisterState").val(),
                zip: $("#inputRegisterZip").val(),
                timeStamp: new Date()
            }
    // userManager makes ajax call and puts userInfo into database
        userManager.createUsers(userInfo);
        $("#mainSignUp").hide();
        $("#mainLogIn").show();
    }
})

}

module.exports = signUp