/*
Functions that returns objects. Each object is in the correct format that the action is supposed to be.
*/
import { UserActionTypes } from "./user.types";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});
