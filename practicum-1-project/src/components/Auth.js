import React, {  useContext } from "react";
// import Navbar from "./Navbar";
import "../Auth.css";
import GoogleLogin from "react-google-login";
import axios from "axios";
// import Profile from "./Profile"
import { AppContext } from "./context";



const Auth = () => {

  // payloadupdate function from contextAPI
  const { PayLoadUpdate } = useContext(AppContext);

// React login method 
  const responseSuccessGoogle = (response) => {
    // console.log("hello");
    axios
      .post("http://localhost:4000/auth/googlelogin", {
        tokenId: response.tokenId,
      })
      .then((response) => {
        // Payload update successfull 
        const { payload } = response.data;
        // console.log("hi payload from auth");
        // console.log(payload);
        PayLoadUpdate(payload);
        // console.log("Last message")
      })
      .catch((err) =>{ console.log("some error")
    console.log(err)});
  };

  const responseFailureGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="login-register">
      {/* <Navbar /> */}
      <div className="auth">
        <div className="register">
          <h3 className="register-title">Have me met before? Register now!</h3>
          <form>
            <div className="mb-3">
              <input
                autoComplete="off"
                className="form-control"
                type="text"
                placeholder="Name"
              ></input>
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
              ></input>
            </div>
            {/* <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
              ></input>
            </div> */}
            <div className="mb-3">
              <input
                className="form-control"
                type="password"
                placeholder="Create a password"
              ></input>

              <div className="mb-3"></div>
              <input
                className="form-control"
                type="password"
                placeholder="Confirm your password"
              ></input>
            </div>
            <button type="button" class="btn-register">
              Register
            </button>

            <div>
              <h3>Or</h3>
              <GoogleLogin
                clientId="592271674414-4qc7458fee6pb9a6r6iq6qlmpplsb7sv.apps.googleusercontent.com"
                buttonText="Register with google"
                onSuccess={responseSuccessGoogle}
                onFailure={responseFailureGoogle}
                cookiePolicy={"single_host_origin"}
                redirect_uri= "postmessage"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="auth">
        <div className="login">
          <h3 className="login-title">Wass'up? Login!</h3>
          <form>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
              ></input>
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
              ></input>
            </div>
            <div>
              <button type="button" class="btn-login">
                Login
              </button>

              <div>
                <h3>Or</h3>
                <GoogleLogin
                  clientId="592271674414-4qc7458fee6pb9a6r6iq6qlmpplsb7sv.apps.googleusercontent.com"
                  buttonText="Login with google"
                  onSuccess={responseSuccessGoogle}
                  onFailure={responseFailureGoogle}
                  cookiePolicy={"single_host_origin"}
                redirect_uri= "postmessage"

                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
