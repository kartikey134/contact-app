const asyncHandler = require('express-async-handler');

//@desc Register a user
//@route POST /api/users
//@access public
const registerUser = asyncHandler(async (req, res) => {
    res.json({message: "Register the user"});
});

//@desc Login user
//@route POST /api/users
//@access public
const loginUser = asyncHandler(async (req, res) => {
    res.json({message: "Login the user"});
});

//@desc Current user information
//@route GET /api/users
//@access private(only logged in user can get the current information)
const currentUser = asyncHandler(async (req, res) => {
    res.json({message: "Current user information"});
});

module.exports = {
    registerUser,
    loginUser,
    currentUser
};