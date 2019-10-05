import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./WithSpinner.styles";

/* Higher Order Component that:
- Accepts a component 
- Returns a spinner if isLoading is true
- Else, returns the component with every other prop
*/
const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
