const User = require("../models/user");

exports.signup = function (req, res, next) {
  //   res.send({ success: true });

  const email = req.body.email;
  const password = req.body.password;

  // See if a user with email or email exist
  User.findOne({ email: email });

  // if user with same username or password exist, retur an error

  // if user does not exist, create and save user record

  // respond to request indicating user was created
};
