import { createSelector } from "reselect";

const selectUser = state => state.user;

/* Gets current user from state */
export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
