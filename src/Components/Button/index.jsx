import React from "react";
import "./style.css";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <React.Fragment>
      <button
        type="submit"
        className="btn btn-warning"
        role="button"
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </React.Fragment>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
