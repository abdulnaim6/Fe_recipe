import React from "react";
import "./style.css";

const Button = (props) => {
  return (
    <React.Fragment>
      <button type="submit" className="btn btn-warning">
        <a href={props.href}>{props.text}</a>
      </button>
    </React.Fragment>
  );
};

export default Button;
