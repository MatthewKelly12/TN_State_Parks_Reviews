const $ = require("jquery")

const userManager = Object.create(null, {

    // get all users
    getAllUsers: {
        value: function () {
            return $.ajax("http://localhost:8088/Users")
        }
    },
    // get single user
    getSingleUsers: {
        value: function (id) {
            return $.ajax(`http://localhost:8088/Users/${id}`)
        }
    },
    // post (create) user
    createUsers: {
        value: function (userInfo) {
            return $.ajax({
                url: "http://localhost:8088/Users",
                method: "POST",
                data: userInfo
            })
        }
    }
})

module.exports = userManager
