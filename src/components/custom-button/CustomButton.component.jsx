import React from "react";
import "./CustomButton.styles.scss";

/* Children are passed in, and other valid HTML button attributes such as type are passed in */

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${isGoogleSignIn ? "google-sign-in" : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
