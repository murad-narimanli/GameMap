import React, { Component } from "react";
import { Link } from "react-router-dom";
import Images from "../../../assets/img/Images/Images";

function Login(props) {
  return (
    <div>
      <div id="login-content">
        <div className="content">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="">
                <h6>Sign in with...</h6>
                <div className="row ml-0">
                  <Link className="box" href="">
                    <img
                      className="register-icon1"
                      src={Images.image43svg}
                    />
                  </Link>
                  <Link className="box" to=''>
                    <img
                      className="register-icon2"
                      src={Images.vectorfbsvg}
                    />
                  </Link>
                  <Link className="box" to=''>
                    <img
                      className="register-icon3"
                      src={Images.image44svg}
                    />
                  </Link>
                </div>
                <div className="row">
                  <hr className="line7"></hr>
                  <p>or</p>
                  <hr className="line7"></hr>
                </div>
                <h6>Sign in with email</h6>
                <form>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                    <Form.Label for="email" className="form-label">
                      Email
                    </Form.Label>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                    <Form.Label for="password" className="form-label">
                      Password
                    </Form.Label>
                  </div>

                  <div className="row d-flex justify-content-center">
                    <Link
                      to=''
                      id="signInBtn"
                      type="button"
                      className="sign-in-btn btn btn-link"
                    >
                      Sign in
                    </Link>
                    <Link
                      to=''
                      type="button"
                      className="register-btn btn btn-link"
                    >
                      Register
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
