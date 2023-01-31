import React from "react";
import PropTypes from "prop-types";
import Header from "./components/Header";

const HeaderOnly = (props) => {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
    </div>
  );
};
HeaderOnly.propTypes = {};

export default HeaderOnly;
