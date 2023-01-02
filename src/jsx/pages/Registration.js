import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../images/gsc_logo.jpeg';
import { loadingToggleAction, signupAction } from '../../store/actions/AuthActions';

// image
function Register(props) {
  const [email, setEmail] = useState("");
  let errorsObj = {
    email: "",
    password: "",
    lastName: "",
    firstName: "",
    phoneNo: ""
  };
  const [errors, setErrors] = useState(errorsObj);
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState();

  const dispatch = useDispatch();

  function onSignUp(e) {
    e.preventDefault();
    console.log("onSignUp");
    let error = false;
    const errorObj = { ...errorsObj };
    if (email === "") {
      console.log("call");
      errorObj.email = "Email is Required";
      error = true;
    }
    if (password === "") {
      errorObj.password = "Password is Required";
      error = true;
    }
    if (firstName === "") {
      errorObj.firstName = "First Name is Required";
      error = true;
    }
    if (lastName === "") {
      errorObj.lastName = "Last Name is Required";
      error = true;
    }
    if (!phoneNo) {
      errorObj.phoneNo = "Phone is Required";
      error = true;
    }
    setErrors(errorObj);
    if (error) return;
    dispatch(loadingToggleAction(true));
    dispatch(
      signupAction(firstName, lastName, phoneNo, email, password, props.history)
    );
  }
  console.log("erro", errors);
  return (
    <div className="authincation h-100 p-meddle">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-6">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <div className="text-center mb-3">
                      <Link to="/login">
                        <img src={logo} alt="" width={100} />
                      </Link>
                    </div>
                    <h4 className="text-center mb-4 ">Sign up your account</h4>
                    {props.errorMessage && (
                      <div className="">{props.errorMessage}</div>
                    )}
                    {props.successMessage && (
                      <div className="">{props.successMessage}</div>
                    )}
                    <form onSubmit={onSignUp}>
                      <div className="form-group mb-3">
                        <label className="mb-1 ">
                          <strong>first Name</strong>
                        </label>
                        <TextField
                          type="text"
                          className="form-control"
                          placeholder="first Name"
                          onChange={(e) => setFirstName(e.target.value)}
                          error={!!errors.firstName}
                          helperText={errors.firstName}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label className="mb-1 ">
                          <strong>Last Name</strong>
                        </label>
                        <TextField
                          type="text"
                          className="form-control"
                          placeholder="last Name"
                          onChange={(e) => setLastName(e.target.value)}
                          error={!!errors.lastName}
                          helperText={errors.lastName}
                        />
                      </div>

                      <div className="form-group mb-3">
                        <label className="mb-1 ">
                          <strong>Email</strong>
                        </label>
                        <TextField
                          value={email}
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                          placeholder="hello@example.com"
                          error={!!errors.email}
                          helperText={errors.email}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label className="mb-1 ">
                          <strong>Phone number</strong>
                        </label>
                        <TextField
                          type="number"
                          className="form-control"
                          onChange={(e) => setPhoneNo(e.target.value)}
                          placeholder="Phone number"
                          error={!!errors.phoneNo}
                          helperText={errors.phoneNo}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label className="mb-1 ">
                          <strong>Password</strong>
                        </label>
                        <TextField
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control"
                          error={!!errors.password}
                          helperText={errors.password}
                        />
                      </div>
                      <div className="text-center mt-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Sign me up
                        </button>
                      </div>
                    </form>
                    <div className="new-account mt-3">
                      <p className="">
                        Already have an account?{" "}
                        <Link className="text-primary" to="/login">
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps)(Register);
