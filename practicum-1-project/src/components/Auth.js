import React from 'react';
import Navbar from "./Navbar";
import "../Auth.css";
import axios from 'axios';


const Auth = () => {


  function googleLogin(){
    
    axios.post('http://localhost:4000/auth/google/', null)
            .then(res => console.log(res.data));
  }

    return (
        
        <div className="login-register">
        <Navbar/>
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
            <button type="button" class="btn-register">Register</button>
            <div class="card-body">
          <button class="btn btn-block btn-social btn-google"  onClick={googleLogin} >
            <i class="fab fa-google"></i>
            Sign In with Google
          </button>
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
            <button type="button" class="btn-login">Login</button>
            
            <div class="card-body">
            <button class="btn btn-block btn-social btn-google"  onClick={googleLogin} >
            <i class="fab fa-google"></i>
            Sign In with Google
          </button>
        </div>
            </div>
          </form>
        </div>
      </div>

        </div>
    )
}

export default Auth;
