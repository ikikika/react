const passport = require("passport");
const User = require("../models/user");
const config = require("../config");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

// Set up options for JWT strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret,
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  // See if the user ID in the payload exists in our db
  User.findById(payload.subdomains, function (err, user) {
    if (err) {
      return done(err, false);
    }

    if (user) {
      // if exist, call 'done' with that user object
      done(null, user);
    } else {
      // if not exist, call 'done' without a user object, user not authenticated
      done(null, false);
    }
  });
});

// Tell passport to use this strategy
passport.use(jwtLogin);
