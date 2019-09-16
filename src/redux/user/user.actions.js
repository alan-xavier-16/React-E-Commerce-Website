/*
Functions that returns objects. Each object is in the correct format that the action is supposed to be.
*/

export const setCurrentUser = user => ({
  type: "SET_CURRENT_USER",
  payloadd: user
});
