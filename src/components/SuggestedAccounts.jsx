import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";

import config from "../configs";
import image from "../assets/images";
import { TickIcon } from "./Icon";
import Wrapper from "./Wrapper";

const SuggestedAccounts = (props) => {
  return (
    <div className="relative py-4 before:content-[''] before:right-2 before:left-2 before:h-[1px] before:absolute before:bg-[#1618231f] before:top-0">
      <h2 className="mb-2 px-2 text-sm text-[#161823bf] font-semibold">
        {props.title}
      </h2>
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <p className="px-2 cursor-pointer text-[#fe2c55] text-sm font-semibold mt-2">
        {props.label}
      </p>
    </div>
  );
};

SuggestedAccounts.propTypes = {};

export default SuggestedAccounts;

const AccountItem = (props) => {
  const renderPreview = () => {
    return (
      <div className="p-5">
        <div className="flex mb-3 justify-between items-center">
          <Link to={config.routes.home}>
            <img
              src={image.Logo}
              alt=""
              className="w-[44px] h-[44px] rounded-full object-cover"
            />
          </Link>
          <button className="bg-[#fe2c55] min-w-[106px] min-h-[28px] font-semibold text-white rounded py-[6px] px-2 flex justify-center items-center hover:bg-[#ef2950]">
            Follow
          </button>
        </div>
        <Link to={config.routes.home} className="flex flex-col">
          <div className="flex items-center">
            <h4 className="text-[#161823] text-lg leading-[22px] font-bold">
              name
            </h4>
            <TickIcon className=" w-4 h-4 ml-1" />
          </div>
          <span className="text-sm font-semibold text-[#161823]">nameee2</span>
        </Link>
        <div className="flex gap-x-3 items-center mt-2">
          <h4 className="text-[17px]  font-bold">
            8.5M
            <span className="ml-[6px] font-normal text-[#161823bf]">
              Followers
            </span>
          </h4>
          <h4 className="text-[17px]  font-bold">
            456M
            <span className="ml-[6px] font-normal text-[#161823bf]">Likes</span>
          </h4>
        </div>
      </div>
    );
  };
  return (
    <Tippy
      interactive
      delay={[800, 0]}
      placement="bottom"
      render={(attr) => (
        <div tabIndex={-1} {...attr} className="w-[320px] rounded-lg">
          <Wrapper>{renderPreview()}</Wrapper>
        </div>
      )}
    >
      <Link
        to={config.routes.home}
        className="flex items-center py-[4px] px-4 cursor-pointer hover:bg-[#16182308]"
      >
        <img
          src={image.Logo}
          alt=""
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="flex-1 ml-4 h-8 ">
          <h4 className="flex leading-5">
            <span className="text-[#161823] font-bold mt-[-2px] ">name</span>
            {true && <TickIcon className="w-[14px] h-[14px] ml-[4px]" />}
          </h4>
          <h3 className="text-sm text-[#161823bf] font-normal leading-[15px] mt-[-2px]">
            name
          </h3>
        </div>
      </Link>
    </Tippy>
  );
};
