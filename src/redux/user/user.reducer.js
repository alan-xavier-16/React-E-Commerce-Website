/* 
A function that gets 2 properties, state object and an action object. 
  - STATE - The initial state or the previous state. 
          - The redux store passes the state to this reducer.
  - ACTION - An object which has:
    - A 'type' which represents the specific action to be carried out. The reducers need to be aware of the action type.
    - A 'payload' object, which can be anything. It is flexible and can be used for some purpose, if needed.
  - SWITCH statements are used to check the TYPE of the action. If the CASE matches the TYPE in the reducer, it updated the state. If the TYPE does not match any of the CASES, it return the original state unchanged. This is necessary as any action triggers ALL REDUCERS.
*/
import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };

    case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
    case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
