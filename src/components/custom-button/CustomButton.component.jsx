import React from "react";
import { CustomButtonContainer } from "./CustomButton.styles";

/* Children are passed in, and other valid HTML button attributes such as type are passed in */
const CustomButton = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustomButton;
