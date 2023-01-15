import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import image from "../assets/images";

const AccountItem = (props) => {
  return (
    <Link to={`/@${props.data.nickname}`} className="flex items-center py-[6px] px-4 cursor-pointer hover:bg-[#16182308]">
      <img
        src={props.data.avatar}
        alt=""
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex-1 ml-3">
        <h4 className="flex">
          <span className="">{props.data.full_name}</span>
          {props.data.tick && (<svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#20D5EC"
            class="w-5 h-5 ml-[6px]"
          >
            <path
              fill-rule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clip-rule="evenodd"
            />
          </svg>)}
        </h4>
        <span className="text-sm text-[#16182380]">{props.data.nickname}</span>
      </div>
    </Link>
  );
};

AccountItem.propTypes = {};

export default AccountItem;
