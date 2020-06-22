import HttpService from "../HttpService";

export const SignUpService = (credentials) => {
  const http = new HttpService();

  let signUpURL = "/register";

  return http
    .postData(credentials, signUpURL)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
