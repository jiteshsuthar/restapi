const _ = require('lodash');
const UsersDB = require('./db');

// Get all users details
const getUsers = (req, res, next) => {
  UsersDB.find({}, {
    updatedAt: 0,
    createdAt: 0
  }, (err, users) => {
    res.status(200).json(users);;
  });
};

// Get a single user details
const getUser = (req, res, next) => {
  UsersDB.find({
    name: req.params.name
  }, {
    updatedAt: 0,
    createdAt: 0
  }, (err, user) => {
    res.status(200).json(user);;
  });
};

// Create a new user
const createUser = (req, res, next) => {
  let user = {
    name,
    email,
    phoneNumber,
    street,
    city,
    state
  } = req.body;

  UsersDB.insert(user, (err, newUser) => {
    let result = _.omit(newUser, ['updatedAt', 'createdAt']);
    res.status(200).json(result);
  });
};

// Update user's details.
const updateUser = (req, res, next) => {
  let username = req.params.name;
  let user = {
    name,
    email,
    phoneNumber,
    street,
    city,
    state
  } = req.body;

  UsersDB.update({
    name: username
  }, {
    $set: user
  }, (err, newUser) => {
    res.status(200).json({
      success: true
    });
  });
};

// Delete user
const deleteUser = (req, res, next) => {
  let username = req.params.name;
  UsersDB.remove({
    name: username
  }, {}, (err, numRemoved) => {
    res.status(200).json({
      success: true
    });
  });
};


module.exports = {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser
};