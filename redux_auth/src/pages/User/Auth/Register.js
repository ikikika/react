import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useStyles } from "../../../styles";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormFields } from "../../../helpers/hooksFormInput";
// import {
//   signUpAction,
//   clearUserAuthState,
// } from "../../../store/actions/User/Auth/AuthActions";
import { displayErrorMessages } from "../../../helpers/displayError";

const Register = () => {
  const [fields, handleFieldChange] = useFormFields({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  useEffect(() => {
    // dispatch(clearUserAuthState());
  }, []);

  const classes = useStyles();

  const dispatch = useDispatch();

  const authResponse = useSelector((state) => state.userAuth.authResponse);

  const UserRegister = (e) => {
    e.preventDefault();

    // clearAuthErrDiv();

    // console.log(fields);
    const passwordMatch = checkPasswordMatch(fields.password, fields.confirm);

    if (passwordMatch == false) {
      alert("passwords dont match");
      return;
    }
    // dispatch(signUpAction(fields));
  };

  const clearAuthErrDiv = () => {
    let authErr = document.querySelector("#authErr");
    authErr.innerHTML = "";
  };

  const checkPasswordMatch = (password, confirm) => {
    if (password != confirm) {
      return false;
    }
    return true;
  };

  const successMessage = (successMessage) => {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<div class="alert alert-success add-padding">' +
            " " +
            successMessage +
            "</div>",
        }}
      />
    );
  };

  return (
    <div>
      <div className={classes.centerItem}>
        <Card>
          <h2>
            <b>Welcome to User Register Page</b>
          </h2>

          <div id="authErr"></div>

          <div id="authResponse">
            {
              // /**
              //  * if authResponse.success is true show success message
              //  */
              // authResponse != "" && authResponse.success == true
              //   ? successMessage(authResponse.message)
              //   : /**
              //    * else if authResponse.success == false show error messages
              //    */
              //   authResponse.success == false
              //   ? displayErrorMessages(
              //       authResponse.error,
              //       document.getElementById("authErr")
              //     )
              //   : authResponse
            }
          </div>

          <form onSubmit={UserRegister}>
            <div>
              <TextField
                type="text"
                className={classes.fullWidth}
                required
                margin="normal"
                variant="outlined"
                label="username"
                id="username"
                value={fields.username}
                onChange={handleFieldChange}
              />
            </div>

            <div>
              <TextField
                type="email"
                className={classes.fullWidth}
                required
                margin="normal"
                variant="outlined"
                label="email"
                id="email"
                value={fields.email}
                onChange={handleFieldChange}
              />
            </div>

            <div>
              <div>
                <TextField
                  className={classes.fullWidth}
                  label="Password"
                  type="password"
                  required
                  id="password"
                  margin="normal"
                  variant="outlined"
                  value={fields.password}
                  onChange={handleFieldChange}
                  required
                />
              </div>

              <div>
                <TextField
                  className={classes.fullWidth}
                  label="Confirm Password"
                  type="password"
                  required
                  margin="normal"
                  variant="outlined"
                  id="confirm"
                  value={fields.confirm}
                  onChange={handleFieldChange}
                  required
                />
              </div>

              <div>
                <Button
                  type="submit"
                  className={classes.fullWidth}
                  variant="contained"
                  color="primary"
                  endIcon={<AccountCircleIcon />}
                >
                  <b>Register</b>
                </Button>
                <br />

                <div className={classes.linkContainer}>
                  <Link to="/login">Login Here</Link>
                </div>
              </div>

              <div className={classes.linkContainer}>
                <Link to="/home">Back To Home Page </Link>
              </div>

              <div></div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Register;
