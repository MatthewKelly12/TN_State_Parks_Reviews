const $ = require("jquery");

// signUp function will get called when sign up button is clicked from log in page
signUp = () => {
// First hide log in page
    $("#mainLogIn").hide();
// Create variable to hold signUp div
    const signUpDiv =
    `<div id="mainSignUp">
        <h2>"Sign Up"</h2>
        <p><input id="inputRegisterUserName" type="text" placeholder="User Name"></input></p>
        <p><input id="inputRegisterPassword" type="text" placeholder="Password"></input></p>
        <p><input id="inputRegisterCity" type="text" placeholder="City"></input></p>
        <p><input id="inputRegisterState" type="text" placeholder="State"></input></p>
        <p><input id="inputRegisterZip" type="text" placeholder="Zip"></input></p>
        <p><button id="buttonSignUp">Sign Up</button></p>
    </div>`
//   Append signUpdiv to signUpPage then show signUpPage
    $("#signUpPage").append(signUpDiv)
    $("#signUpPage").show();
}

module.exports = signUp