import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = (props) => {
  let Comp = "Button";
  if (props.to) {
    Comp = Link;
  } else if (props.href) {
    Comp = "a";
  }

  return (
    <Comp className={props.className} onClick={props.onClick}>
      {props.children}
    </Comp>
  );
};

Button.propTypes = {};

export default Button;
