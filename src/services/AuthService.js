import swal from 'sweetalert';

import { loginConfirmedAction, logout } from '../store/actions/AuthActions';
import axiosInstance from '../utils/axiosInstance';

export async function signUp(firstName, lastName, phoneNo, email, password) {
  //axios call
  console.log("caalllll");
  const postData = {
    firstName,
    lastName,
    phoneNo,
    email,
    password
  };

  return await axiosInstance.post("/auth/sign-up", postData);
}

export async function login(email, password) {
  const postData = {
    email,
    password
  };
  return await axiosInstance.post("/auth/sign-in", postData);
}

export function formatError(errorResponse) {
  switch (errorResponse.error.message) {
    case "EMAIL_EXISTS":
      //return 'Email already exists';
      swal("Oops", "Email already exists", "error");
      break;
    case "EMAIL_NOT_FOUND":
      //return 'Email not found';
      swal("Oops", "Email not found", "error", { button: "Try Again!" });
      break;
    case "INVALID_PASSWORD":
      //return 'Invalid Password';
      swal("Oops", "Invalid Password", "error", { button: "Try Again!" });
      break;
    case "USER_DISABLED":
      return "User Disabled";

    default:
      return "";
  }
}

export function saveTokenInLocalStorage(token) {
  localStorage.setItem("token", JSON.stringify(token));
}

export function runLogoutTimer(dispatch, timer, history) {
  setTimeout(() => {
    dispatch(logout(history));
  }, timer);
}

export function checkAutoLogin(dispatch, history) {
  const token = localStorage.getItem("token");
  console.log("Checking", token);
  if (!token) {
    dispatch(logout(history));
    return;
  }

  dispatch(loginConfirmedAction(token));

  // const timer = expireDate.getTime() - todaysDate.getTime();
  // runLogoutTimer(dispatch, timer, history);
}
