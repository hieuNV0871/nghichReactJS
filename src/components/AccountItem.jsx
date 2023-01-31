import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import image from "../assets/images";
import { TickIcon } from "./Icon";

const AccountItem = (props) => {
  return (
    <Link
      to={`/@${props.data.nickname}`}
      className="flex items-center py-[6px] px-4 cursor-pointer hover:bg-[#16182308]"
    >
      <img
        src={props.data.avatar}
        alt=""
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex-1 ml-3">
        <h4 className="flex">
          <span className="">{props.data.full_name}</span>
          {props.data.tick && <TickIcon className="w-5 h-5 ml-[6px]" />}
        </h4>
        <span className="text-sm text-[#16182380]">{props.data.nickname}</span>
      </div>
    </Link>
  );
};

AccountItem.propTypes = {};

export default AccountItem;
