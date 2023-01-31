import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
const MenuItem = (props) => {
  return (
    <Button
      onClick={props.onClick}
      to={props.data.to}
      className={`flex items-center gap-x-2 py-2 pl-4 hover:bg-[#16182308] font-semibold ${props.data.separate}`}
    >
      {props.data.icon}
      {props.data.title}
    </Button>
  );
};

MenuItem.propTypes = {};

export default MenuItem;
