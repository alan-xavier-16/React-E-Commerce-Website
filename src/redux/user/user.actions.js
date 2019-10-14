/*
Functions that returns objects. Each object is in the correct format that the action is supposed to be.
*/
import UserActionTypes from "./user.types";

/* GOOGLE SIGN IN ACTIONS */
export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

/* EMAIL SIGN IN ACTIONS */
export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

/* CHECKS USER IN SESSION */
export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

/* USER SIGN OUT ACTION */
export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});
