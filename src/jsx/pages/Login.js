import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadingToggleAction, loginAction } from '../../store/actions/AuthActions';
import loginbg from './../../images/bg6.jpg';
import logo2 from './../../images/gsc_logo.jpeg';

// image
//import logo from "../../images/logo-full-white.png";
function Login(props) {
  const [email, setEmail] = useState("");
  let errorsObj = { email: "", password: "" };
  const [errors, setErrors] = useState(errorsObj);
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onLogin = (e) => {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    if (email === "") {
      errorObj.email = "Email is Required";
      error = true;
    }
    if (password === "") {
      errorObj.password = "Password is Required";
      error = true;
    }
    setErrors(errorObj);
    if (error) {
      return;
    }
    dispatch(loadingToggleAction(true));
    dispatch(loginAction(email, password, props.history));
  };

  return (
    <div className="page-wraper">
      <div
        className="page-content bg-white login-style2"
        style={{
          backgroundImage: "url(" + loginbg + ")",
          backgroundSize: "cover"
        }}
      >
        <div className="section-full">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 d-flex">
                <div className="text-white max-w400 align-self-center">
                  <div className="logo">
                    <Link to={"#"}>
                      <img src={logo2} alt="" width={150} />
                    </Link>
                  </div>
                  <h2 className="mb-2 text-white font-w700">
                    Login To You Now
                  </h2>
                  <p className="mb-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry has been the industry.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="login-2 submit-resume p-4 seth">
                  <div className="nav">
                    <form onSubmit={onLogin} className="col-12 p-a0 ">
                      <p className="font-weight-600">
                        If you have an account with us, please log in.
                      </p>
                      {props.errorMessage && (
                        <div className="bg-red-300 text-red-900 border border-red-900 p-1 my-2">
                          {props.errorMessage}
                        </div>
                      )}
                      {props.successMessage && (
                        <div className="bg-green-300 text-green-900 border border-green-900 p-1 my-2">
                          {props.successMessage}
                        </div>
                      )}
                      <div className="form-group mb-3">
                        <label>E-Mail Address*</label>
                        <div className="input-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Type Your Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          {errors.email && (
                            <div className="text-danger fs-12">
                              {errors.email}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label>Password *</label>
                        <div className="input-group">
                          <input
                            type="password"
                            className="form-control"
                            value={password}
                            placeholder="Type Your Password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          {errors.password && (
                            <div className="text-danger fs-12">
                              {errors.password}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="text-center">
                        <button className="btn btn-primary btn-md float-start">
                          login
                        </button>
                        <Link
                          to="page-register"
                          className="btn-link forget-pass mt-3 float-end"
                        >
                          <i className="fa fa-unlock-alt"></i> Sign up
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="login-footer">
          <div className="container">
            <div className="row m-0">
              <div className="col-12 p-0 text-center text-white op8">
                <span className="float-sm-start float-none mb-sm-0 mb-1 d-sm-inline-block d-block">
                  © Copyright by <i className="fa fa-heart mx-3 text-red"></i>
                </span>
                <span className="float-sm-end float-none">
                  All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
    successMessage: state.auth.successMessage,
    showLoading: state.auth.showLoading
  };
};
export default connect(mapStateToProps)(Login);
