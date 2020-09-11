const jwt = require("jwt-simple");
const User = require("../models/user");
const config = require("../config");

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function (req, res, next) {
  // user already had email and password authenticated
  // give them a token
};

exports.signup = function (req, res, next) {
  //   res.send({ success: true });

  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "you must provide email and password" });
  }

  // See if a user with email or email exist
  User.findOne({ email: email }, function (err, existingUser) {
    if (err) {
      return next(err);
    }

    // If a user with email does EXIST, return an error
    if (existingUser) {
      return res.status(422).send({ error: "Email is in use" });
    }

    // if user does not exist, create and save user record
    const user = new User({
      email: email,
      password: password,
    });

    user.save(function (err) {
      if (err) {
        return next(err);
      }
    });

    // respond to request indicating user was created
    res.json({ token: tokenForUser(user) });
  });
};
