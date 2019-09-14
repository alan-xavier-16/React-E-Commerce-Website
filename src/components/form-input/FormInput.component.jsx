import React from "react";
import "./FormInput.styles.scss";

/* otherProps will be name, value, type, and other valid HTML form attributes */

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`form-input-label ${
            otherProps.value.length ? "shrink" : ""
          } `}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
