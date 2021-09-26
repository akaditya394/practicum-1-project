import React from 'react'

const Auth = () => {
    return (
        <div>
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
                placeholder="Create a password"
              ></input>

              <div className="mb-3"></div>
              <input
                className="form-control"
                type="password"
                placeholder="Confirm your password"
              ></input>
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
          </form>
        </div>
      </div>

        </div>
    )
}

export default Auth;
