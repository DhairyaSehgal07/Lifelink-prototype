import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//express async handler will allow us to use
// async await and not have everything wrapped
// around in a try catch

//@desc get all users
//@route GET/api/users
//@access SuperUser
const getUsers = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get users" });
});

//@desc gets single user profile
// @route GET/api/users
//@access SuperUser
const getSingleUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get single user",
  });
});

// WORK STARTS HERE -----------------------------------------------

//@desc registers a new user
//@route POST/api/users/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    address,
    mobileNumber,
    email,
    password,
    bloodType,
    gender,
    dateOfBirth,
    fathersName,
    occupation,
  } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    address,
    mobileNumber,
    email,
    password,
    bloodType,
    gender,
    dateOfBirth,
    fathersName,
    occupation,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      address: user.address,
      mobileNumber: user.mobileNumber,
      email: user.email,
      bloodType: user.bloodType,
      gender: user.gender,
      dateOfBirth: user.dateOfBirth,
      fathersName: user.fathersName,
      occupation: user.occupation,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc authenticates a user
//@route POST/api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

//@desc logs out a user
//@route POST /api/users/logout
//@access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User logged out" });
});

//@desc Get user profile
//@route GET/api/users/profile
//@access Private
const getUserProfile = asyncHandler(async (req, res) => {
  try {
    const user = {
      _id: req.user._id,
      name: req.user.name,
      address: req.user.address,
      mobileNumber: req.user.mobileNumber,
      email: req.user.email,
      bloodType: req.user.bloodType,
      gender: req.user.gender,
      dateOfBirth: req.user.dateOfBirth,
      fathersName: req.user.fathersName,
      occupation: req.user.occupation,
    };

    if (!user._id) {
      throw new Error("User not found.");
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message || "User not found." });
  }
});

//@desc updates the user profile
//@route PUT/api/users/:id
//@access Private (user)
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    (user.name = req.body.name || user.name),
      (user.address = req.body.address || user.address),
      (user.mobileNumber = req.body.mobileNumber || user.mobileNumber),
      (user.email = req.body.email || user.email),
      (user.bloodType = req.body.bloodType || user.bloodType),
      (user.gender = req.user.gender || user.gender),
      (user.dob = req.user.dob || user.dob),
      (user.fathersName = req.user.fathersName || user.fathersName),
      (user.occupation = req.body.occupation || user.occupation);

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      status: "Success",
      id: updatedUser._id,
      name: updatedUser.name,
      address: updatedUser.address,
      mobileNumber: updatedUser.mobileNumber,
      email: updatedUser.email,
      bloodType: updatedUser.bloodType,
      gender: updatedUser.gender,
      dateOfBirth: updatedUser.dateOfBirth,
      fathersName: updatedUser.fathersName,
      occupation: updatedUser.occupation,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const deleteUserProfile = asyncHandler(async (req, res) => {
  try {
    // Get the logged-in user ID from the request
    const userId = req.user._id;

    // Use the user model to find and remove the user by ID
    const deletedUser = await User.findByIdAndDelete(userId);

    if (deletedUser) {
      res.status(200).json({ message: "User profile deleted successfully." });
    } else {
      res.status(404).json({ error: "User not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error." });
  }
});

export {
  getUsers,
  getSingleUser,
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
};
