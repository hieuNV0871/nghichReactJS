import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const MenuItemSidebar = (props) => {
  return (
    <NavLink
      className={(nav) => {
        let css = [
          "text-[#161823]",
          "font-bold text-lg",
          "flex",
          "p-2",
          "gap-x-[10px]",
          "hover:bg-[#16182308]",
          "rounded-md",
        ];
        if (nav.isActive) {
          css.splice(0, 1, "text-[#fe2c55]");
        }
        return css.join(" ");
      }}
      to={props.to}
    >
      {props.icon}
      <span>{props.title}</span>
    </NavLink>
  );
};

MenuItemSidebar.propTypes = {};

export default MenuItemSidebar;
