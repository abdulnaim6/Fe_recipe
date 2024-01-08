import React from "react";
import "./style.css";

const Button = (props) => {
  return (
    <React.Fragment>
      <button type="submit" className="btn btn-warning" role="button">
        <a href={props.href}>{props.text}</a>
      </button>
    </React.Fragment>
  );
};

export default Button;
